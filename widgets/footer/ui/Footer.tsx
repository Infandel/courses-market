import { FooterProps } from './Footer.props';
import { format } from 'date-fns';
import styles from './Footer.module.scss';
import clsx from 'clsx';

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer className={clsx(className, styles.footer)} {...props}>
			<div>Made by Infandel in {format(new Date(), 'yyyy')}</div>
		</footer>
	);
};
