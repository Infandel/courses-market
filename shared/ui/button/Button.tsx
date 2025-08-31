import { ButtonProps } from './Button.props';
import ArrowIcon from '@/public/assets/arrow.svg';
import styles from './Button.module.css';
import clsx from 'clsx';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps) => {
	return (
		<button
			className={clsx(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && <ArrowIcon className={clsx(styles.arrow, { [styles.down]: arrow === 'down' })} />}
		</button>
	);
};
