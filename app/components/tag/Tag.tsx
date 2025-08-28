import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'md', className, children, color = 'ghost', href, ...props }: TagProps) => {
	return (
		<div
			className={cn(styles.tag, className, {
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
