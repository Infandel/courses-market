'use client';

import styles from './MobileSidebar.module.css';
import Logo from '@/public/assets/logo.svg';
import { IconButton } from '@/shared';
import { Search } from '@/features/sidebar/ui/search/Search';
import { Menu } from '@/features/sidebar/ui/menu/Menu';
import { MenuItem } from '@/entities';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const MobileSidebar = ({ menu, firstCategory }: { menu: MenuItem[]; firstCategory: number }) => {
	const [isOpened, setIsOpened] = useState(false);

	const pathname = usePathname();

	useEffect(() => {
		setIsOpened(false); // On URL change closing side menu
	}, [pathname]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20,
			},
		},
		closed: {
			opacity: 0,
			x: '100%',
		},
	};

	return (
		<div className={styles.mobileSidebar}>
			<Link href={'/'}>
				<Logo />
			</Link>
			<IconButton appearance='white' icon='burger' onClick={() => setIsOpened(true)} />
			<motion.div
				className={styles.mobileMenu}
				animate={isOpened ? 'opened' : 'closed'}
				variants={variants}
				initial={'closed'}
			>
				<Logo />
				<Search />
				<Menu menu={menu} firstCategory={firstCategory} />
				<IconButton className={styles.menuClose} appearance='white' icon='cross' onClick={() => setIsOpened(false)} />
			</motion.div>
		</div>
	);
};
