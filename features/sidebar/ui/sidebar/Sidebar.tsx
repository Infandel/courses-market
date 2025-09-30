import { getMenu } from '@/entities';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import clsx from 'clsx';
import Logo from '@/public/assets/logo.svg';
import { Search } from '../search/Search';
import { Menu } from '../menu/Menu';
import Link from 'next/link';

export const Sidebar = async ({ className, ...props }: SidebarProps) => {
	const { menu, firstCategory } = await getMenu();

	return (
		<div className={clsx(className, styles.sidebar)} {...props}>
			<Link href={'/'}>
				<Logo />
			</Link>
			<Search />
			<Menu menu={menu} firstCategory={firstCategory} />
		</div>
	);
};
