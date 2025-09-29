'use client';

import { ProductProps } from './Product.props';
import { Button, Card, Divider, numDeclination, prettyPrice, Rating, Tag } from '@/shared';
import Image from 'next/image';
import styles from './Product.module.scss';
import clsx from 'clsx';
import { type ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Review } from '../review/Review';
import { ReviewForm } from '../reviewForm/ReviewForm';
import { motion } from 'framer-motion';

export const Product = motion.create(
	forwardRef(function Product({ product, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>) {
		const [isReviewOpened, setIsReviewOpened] = useState(false);
		const reviewRef = useRef<HTMLDivElement>(null);

		const variants = {
			visible: {
				opacity: 1,
				height: '100%',
				display: 'block',
			},
			hidden: {
				opacity: 0,
				height: 0,
				display: 'none',
			},
		};

		const scrollToReview = () => {
			setIsReviewOpened(true);
			// Because display none and display block works in parallel and element can't be focused, until it's block again
			setTimeout(() => {
				reviewRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
				reviewRef.current?.focus();
			});
		};

		const anyRating = product.reviewAvg ?? product.initialRating;

		return (
			<div className={styles.productWrapper} {...props} ref={ref}>
				<Card className={styles.product}>
					<Image className={styles.logo} src={product.image} alt={product.title} width={70} height={70} />
					<div className={styles.title}>{product.title}</div>
					<div className={styles.price}>
						<span>
							<span className='visuallyHidden'>цена</span>
							{prettyPrice(product.price)}
						</span>
						{product.oldPrice && (
							<Tag className={styles.oldPrice} size='sm' color='green'>
								<span className='visuallyHidden'>скидка</span>
								{prettyPrice(product.price - product.oldPrice)}
							</Tag>
						)}
					</div>
					<div className={styles.credit}>
						<span className='visuallyHidden'>кредит</span>
						{prettyPrice(product.credit)}/<span className={styles.month}>мес</span>
					</div>
					<div className={styles.rating}>
						<span className='visuallyHidden'>{'рейтинг' + anyRating}</span>
						<Rating rating={anyRating} />
					</div>
					<div className={styles.tags}>
						{product.categories.map((c) => (
							<Tag key={c} className={styles.category} color='ghost'>
								{c}
							</Tag>
						))}
					</div>
					<div className={styles.priceTitle} aria-hidden='true'>
						цена
					</div>
					<div className={styles.creditTitle} aria-hidden='true'>
						в кредит
					</div>
					<div className={styles.rateTitle}>
						<a href='#ref' onClick={scrollToReview}>
							{product.reviewCount} {numDeclination(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
						</a>
					</div>
					<Divider className={styles.hr} />
					<div className={styles.description}>{product.description}</div>
					<div className={styles.feature}>
						{product.characteristics.map((c) => (
							<div key={c.name} className={styles.characteristic}>
								<span className={styles.characteristicName}>{c.name}</span>
								<span className={styles.characteristicDots}></span>
								<span className={styles.characteristicValue} title={c.value}>
									{c.value}
								</span>
							</div>
						))}
					</div>
					<div className={styles.advBlock}>
						{product.advantages && (
							<div className={styles.advantages}>
								<div className={styles.advTitle}>Преимущества</div>
								<div>{product.advantages}</div>
							</div>
						)}
						{product.disadvantages && (
							<div className={styles.disadvantages}>
								<div className={styles.advTitle}>Недостатки</div>
								<div>{product.disadvantages}</div>
							</div>
						)}
					</div>
					<Divider className={clsx(styles.hr, styles.hr2)} />

					<div className={styles.actions}>
						<Button appearance='primary'>Узнать подробнее</Button>
						<Button
							className={styles.reviewButton}
							appearance='ghost'
							arrow={isReviewOpened ? 'down' : 'right'}
							onClick={() => setIsReviewOpened(!isReviewOpened)}
							aria-expanded={isReviewOpened}
						>
							Читать отзывы
						</Button>
					</div>
				</Card>
				<motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
					<Card className={styles.reviews} color='blue' ref={reviewRef} tabIndex={0}>
						{product.reviews.map((r) => (
							<div key={r._id}>
								<Review review={r} />
								<Divider />
							</div>
						))}
						<ReviewForm productId={product._id} />
					</Card>
				</motion.div>
			</div>
		);
	})
);
