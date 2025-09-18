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

export const Product = motion(
	forwardRef(function Product({ product, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>) {
		const [isReviewOpened, setIsReviewOpened] = useState(false);
		const reviewRef = useRef<HTMLDivElement>(null);

		const scrollToReview = () => {
			setIsReviewOpened(true);
			reviewRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		};

		return (
			<div className={styles.productWrapper} {...props} ref={ref}>
				<Card className={styles.product}>
					<Image className={styles.logo} src={product.image} alt={product.title} width={70} height={70} />
					<div className={styles.title}>{product.title}</div>
					<div className={styles.price}>
						{prettyPrice(product.price)}
						{product.oldPrice && (
							<Tag className={styles.oldPrice} size='sm' color='green'>
								{prettyPrice(product.price - product.oldPrice)}
							</Tag>
						)}
					</div>
					<div className={styles.credit}>
						{prettyPrice(product.credit)}/<span className={styles.month}>мес</span>
					</div>
					<div className={styles.rating}>
						<Rating rating={product.reviewAvg ?? product.initialRating} />
					</div>
					<div className={styles.tags}>
						{product.categories.map((c) => (
							<Tag key={c} className={styles.category} color='ghost'>
								{c}
							</Tag>
						))}
					</div>
					<div className={styles.priceTitle}>цена</div>
					<div className={styles.creditTitle}>в кредит</div>
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
						>
							Читать отзывы
						</Button>
					</div>
				</Card>
				<Card
					className={clsx({
						[styles.openedReview]: isReviewOpened,
						[styles.closedReview]: !isReviewOpened,
					})}
					color='blue'
					ref={reviewRef}
				>
					{product.reviews.map((r) => (
						<div key={r._id}>
							<Review review={r} />
							<Divider />
						</div>
					))}
					<ReviewForm productId={product._id} />
				</Card>
			</div>
		);
	})
);
