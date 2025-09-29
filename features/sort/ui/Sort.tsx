'use client';

import { SortProps } from './Sort.props';
import { SortEnum } from '@/entities';
import SortIcon from '../assets/sort.svg';
import styles from './Sort.module.css';
import clsx from 'clsx';

export const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
	const sortByRating = sort === SortEnum.Rating;
	const sortByPrice = sort === SortEnum.Price;

	return (
		<div className={clsx(styles.sort, className)} {...props}>
			<div className={styles.sortName} id='sort'>
				Сортировка
			</div>
			<button
				id='rating'
				className={clsx({ [styles.active]: sortByRating })}
				onClick={() => setSort(SortEnum.Rating)}
				aria-pressed={sortByRating}
				aria-labelledby='sort rating'
			>
				<SortIcon className={styles.sortIcon} /> По рейтингу
			</button>
			<button
				id='price'
				className={clsx({ [styles.active]: sortByPrice })}
				onClick={() => setSort(SortEnum.Price)}
				aria-pressed={sortByPrice}
				aria-labelledby='sort price'
			>
				<SortIcon className={styles.sortIcon} /> По цене
			</button>
		</div>
	);
};
