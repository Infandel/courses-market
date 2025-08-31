import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import clsx from 'clsx';

export const Footer = ({ size = 'md', className, children, color = 'ghost', href, ...props }: FooterProps) => {
	return (
		<div
			className={clsx(styles.Footer, className, {
				[styles.sm]: size === 'sm',
				[styles.md]: size === 'md',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.grey]: color === 'grey',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary',
			})}
			{...props}
		>
			{href ? <a href={href}> {children}</a> : <>{children}</>}
		</div>
	);
};
