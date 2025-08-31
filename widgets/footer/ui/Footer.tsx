import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import clsx from 'clsx';

export const Footer = ({ ...props }: FooterProps) => {
	return <div {...props}>Footer hello</div>;
};
