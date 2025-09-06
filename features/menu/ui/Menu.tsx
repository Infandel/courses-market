import { getMenu, PageItem } from '@/entities';
import styles from './Menu.module.css';
import { firstLevelMenu } from '../constants';
import clsx from 'clsx';
import Link from 'next/link';
import { FirstLevelMenuItem } from '../types';

export const Menu = async () => {
	const { menu, firstCategory } = await getMenu();

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
				{menu.map((m) => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div
							className={clsx(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened,
							})}
						>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
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
					[styles.thirdLevelActive]: false,
				})}
				scroll={false}
			>
				{p.category}
			</Link>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
