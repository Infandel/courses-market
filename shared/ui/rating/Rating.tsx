'use client';

import { RatingProps } from './Rating.props';
import StarIcon from '@/public/assets/star.svg';
import styles from './Rating.module.css';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, JSX, KeyboardEvent, useEffect, useState } from 'react';

export const Rating = forwardRef(function Rating(
	{ isEditable = false, rating, setRating, error, ...props }: RatingProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

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
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e) => isEditable && handleSpace(i + 1, e)}
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

	const handleSpace = (i: number, e: KeyboardEvent<HTMLSpanElement>) => {
		if (e.code != 'Space' || !setRating) return;
		setRating(i);
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
