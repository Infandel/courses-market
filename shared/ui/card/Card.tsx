import { CardProps } from './Card.props';
import ArrowIcon from '@/public/assets/arrow.svg';
import styles from './Card.module.css';
import clsx from 'clsx';

export const Card = ({ color = 'white', children, className, ...props }: CardProps) => {
	return (
		<div
			className={clsx(styles.card, className, {
				[styles.blue]: color === 'blue',
			})}
			{...props}
		>
			{children}
		</div>
	);
};
