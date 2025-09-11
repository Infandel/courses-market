import { getMenu } from '@/entities';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import clsx from 'clsx';
import { Menu, Search } from '@/features';
import Logo from '@/public/assets/logo.svg';

export const Sidebar = async ({ className, ...props }: SidebarProps) => {
	const { menu, firstCategory } = await getMenu();

	return (
		<div className={clsx(className, styles.sidebar)} {...props}>
			<Logo />
			<Search />
			<Menu menu={menu} firstCategory={firstCategory} />
		</div>
	);
};
