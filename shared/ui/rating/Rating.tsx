'use client';

import { RatingProps } from './Rating.props';
import StarIcon from '@/public/assets/star.svg';
import styles from './Rating.module.css';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, JSX, KeyboardEvent, useEffect, useRef, useState } from 'react';

export const Rating = forwardRef(function Rating(
	{ isEditable = false, rating, setRating, error, ...props }: RatingProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
	const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	const computeFocus = (r: number, i: number): number => {
		if (!isEditable) return -1;
		if (!rating && i === 0) return 0;
		if (r === i + 1) return 0;
		return -1;
	};

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={clsx({
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable,
					})}
					key={i}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClickIcon(i + 1)}
					tabIndex={computeFocus(rating, i)}
					onKeyDown={handleKey}
					ref={(r) => {
						if (ratingArrayRef.current && ratingArrayRef.current.length < 5) ratingArrayRef.current.push(r);
					}}
				>
					<StarIcon />
				</span>
			);
		});

		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) return;
		constructRating(i);
	};

	const onClickIcon = (i: number) => {
		if (!isEditable || !setRating) return;
		setRating(i);
	};

	const handleKey = (e: KeyboardEvent<HTMLSpanElement>) => {
		if (!isEditable || !setRating) {
			return;
		}

		if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
			if (!rating) {
				setRating(1);
			} else {
				e.preventDefault();
				setRating(rating < 5 ? rating + 1 : 5);
			}
			ratingArrayRef.current[rating]?.focus();
		}

		if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
			e.preventDefault();
			setRating(rating > 1 ? rating - 1 : 1);
			ratingArrayRef.current[rating - 2]?.focus();
		}
	};

	return (
		<div className={clsx(styles.star, { [styles.error]: error })} {...props} ref={ref}>
			{ratingArray.map((r, i) => (
				<span key={i}>{r}</span>
			))}
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});
