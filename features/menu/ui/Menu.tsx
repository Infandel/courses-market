'use client';

import { MenuItem, PageItem } from '@/entities';
import styles from './Menu.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import { FirstLevelMenuItem, firstLevelMenu } from '@/shared';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Menu = ({ menu, firstCategory }: { menu: MenuItem[]; firstCategory: number }) => {
	const pathname = usePathname();
	const [currentMenu, setCurrentMenu] = useState(menu);

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
							<div
								className={clsx(styles.secondLevelBlock, {
									[styles.secondLevelBlockOpened]: m.isOpened,
								})}
							>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	// Most inner route
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<Link
				key={p.alias}
				href={`/${route}/${p.alias}`}
				className={clsx(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname,
				})}
				scroll={false}
			>
				{p.category}
			</Link>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
