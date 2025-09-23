import { IconButtonProps, icons } from './IconButton.props';
import styles from './IconButton.module.css';
import clsx from 'clsx';

export const IconButton = ({ appearance, icon, className, ...props }: IconButtonProps) => {
	const IconComp = icons[icon];

	return (
		<button
			className={clsx(styles.iconButton, className, {
				[styles.primary]: appearance === 'primary',
				[styles.white]: appearance === 'white',
			})}
			{...props}
		>
			<IconComp />
		</button>
	);
};
