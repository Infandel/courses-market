import clsx from 'clsx';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Logo from '@/public/assets/logo.svg';
import { IconButton } from '@/shared';
import { Sidebar } from '@/features';

export const Header = ({ className, ...props }: HeaderProps) => {
	return (
		<header className={clsx(className, styles.header)} {...props}>
			<Logo />
			<IconButton appearance='white' icon='burger' />
			<div className={styles.mobileMenu}>
				<Sidebar />
				<IconButton className={styles.menuClose} appearance='white' icon='cross' />
			</div>
		</header>
	);
};
