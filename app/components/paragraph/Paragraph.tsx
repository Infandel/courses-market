import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ size = 'md', className, children, ...props }: ParagraphProps) => {
	return (
		<p
			className={cn(styles.paragraph, className, {
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
