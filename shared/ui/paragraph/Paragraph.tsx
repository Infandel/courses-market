import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import clsx from 'clsx';

export const Paragraph = ({ size = 'md', className, children, ...props }: ParagraphProps) => {
	return (
		<p
			className={clsx(styles.paragraph, className, {
				[styles.sm]: size === 'sm',
				[styles.md]: size === 'md',
				[styles.lg]: size === 'lg',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
