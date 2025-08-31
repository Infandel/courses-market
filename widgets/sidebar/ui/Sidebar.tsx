import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import clsx from 'clsx';

export const Sidebar = ({ size = 'md', className, children, color = 'ghost', href, ...props }: SidebarProps) => {
	return (
		<div
			className={clsx(styles.Sidebar, className, {
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
