import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import clsx from 'clsx';

export const Header = ({ size = 'md', className, children, color = 'ghost', href, ...props }: HeaderProps) => {
	return (
		<div
			className={clsx(styles.Header, className, {
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
