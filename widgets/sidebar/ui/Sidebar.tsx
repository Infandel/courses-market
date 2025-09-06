import { SidebarProps } from './Sidebar.props';
// import styles from './Sidebar.module.css';
// import clsx from 'clsx';
import { Menu } from '@/features';

export const Sidebar = ({ ...props }: SidebarProps) => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};
