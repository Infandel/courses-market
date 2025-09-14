import { CardProps } from './Card.props';
import styles from './Card.module.css';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

export const Card = forwardRef(function Card(
	{ color = 'white', children, className, ...props }: CardProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	return (
		<div
			className={clsx(styles.card, className, {
				[styles.blue]: color === 'blue',
			})}
			{...props}
			ref={ref}
		>
			{children}
		</div>
	);
});
