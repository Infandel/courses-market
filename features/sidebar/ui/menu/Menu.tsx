'use client';

import { MenuItem, PageItem } from '@/entities';
import styles from './Menu.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import { FirstLevelMenuItem, firstLevelMenu } from '@/shared';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Menu = ({ menu, firstCategory }: { menu: MenuItem[]; firstCategory: number }) => {
	const pathname = usePathname();
	const [currentMenu, setCurrentMenu] = useState(menu);

	const variants = {
		visible: {
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
			marginBottom: 5,
		},
		hidden: {
			marginBottom: 0,
		},
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 'fit-content',
			transition: { duration: 0.2 },
		},
		hidden: {
			opacity: 0,
			height: 0,
		},
	};

	const openSecondLevel = (secondCategory: string) => {
		setCurrentMenu(
			menu.map((m) => {
				if (m._id.secondCategory == secondCategory) {
					m.isOpened = !m.isOpened;
				}
				return m;
			})
		);
	};

	// 1st level (top tier) route
	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((m) => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
							<div
								className={clsx(styles.firstLevel, {
									[styles.firstLevelActive]: m.id === firstCategory,
								})}
							>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</Link>
						{m.id === firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	// 2nd level deep route
	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{currentMenu.map((m) => {
					if (m.pages.map((p) => p.alias).includes(pathname.split('/').at(-1) as string)) {
						m.isOpened = true;
					}

					return (
						<div key={m._id.secondCategory}>
							<div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
								{m._id.secondCategory}
							</div>
							<motion.div
								layout
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								variants={variants}
								className={clsx(styles.secondLevelBlock)}
							>
								{buildThirdLevel(m.pages, menuItem.route)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};

	// Most inner route
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<motion.div key={p.alias} variants={variantsChildren}>
				<Link
					href={`/${route}/${p.alias}`}
					className={clsx(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname,
					})}
				>
					{p.category}
				</Link>
			</motion.div>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
