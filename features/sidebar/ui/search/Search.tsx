'use client';

import { KeyboardEvent, useState } from 'react';
import { SearchProps } from './Search.props';
import { IconButton, Input } from '@/shared';
import styles from './Search.module.css';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export const Search = ({ className, ...props }: SearchProps) => {
	const [search, setSearch] = useState('');
	const { push } = useRouter();

	const goToSearch = () => {
		const params = new URLSearchParams();

		if (search) {
			params.set('q', search);

			push(`/search?${params.toString()}`);
		}
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') goToSearch();
	};

	return (
		<form className={clsx(className, styles.search)} {...props} role='search'>
			<Input
				className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<IconButton
				appearance='primary'
				icon='glass'
				className={styles.button}
				onClick={goToSearch}
				aria-label='Поиск по сайту'
			/>
		</form>
	);
};
