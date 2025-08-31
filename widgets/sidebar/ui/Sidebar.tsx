import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import clsx from 'clsx';

export const Sidebar = ({ ...props }: SidebarProps) => {
	return <div {...props}>Sidebar</div>;
};
