'use client';

import { SortProps } from './Sort.props';
import { SortEnum } from '@/entities';
import SortIcon from '../assets/sort.svg';
import styles from './Sort.module.css';
import clsx from 'clsx';

export const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
	return (
		<div className={clsx(styles.sort, className)} {...props}>
			<button className={clsx({ [styles.active]: sort === SortEnum.Rating })} onClick={() => setSort(SortEnum.Rating)}>
				<SortIcon className={styles.sortIcon} /> По рейтингу
			</button>
			<button className={clsx({ [styles.active]: sort === SortEnum.Price })} onClick={() => setSort(SortEnum.Price)}>
				<SortIcon className={styles.sortIcon} /> По цене
			</button>
		</div>
	);
};
