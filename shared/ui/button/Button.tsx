import { ButtonProps } from './Button.props';
import ArrowIcon from '@/public/assets/arrow.svg';
import styles from './Button.module.css';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps) => {
	return (
		<motion.button
			className={clsx(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			whileHover={{ scale: 1.05 }}
			{...props}
		>
			{children}
			{arrow !== 'none' && <ArrowIcon className={clsx(styles.arrow, { [styles.down]: arrow === 'down' })} />}
		</motion.button>
	);
};
