'use client';

import { Htag, Tag } from '@/shared';
import { Advantages, HhData, Product, Sort, sortReducer } from '@/features';
import { TopPageProps } from './TopPage.props';
import styles from './TopPage.module.scss';
import { SortEnum, TopLevelCategory } from '@/entities';
import { useReducer } from 'react';

export const TopPage = ({ page, products, firstCategory }: TopPageProps) => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
		products: products || [],
		sort: SortEnum.Rating,
	});

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort });
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && (
					<Tag color='grey' size='md'>
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>{sortedProducts && sortedProducts.map((p) => <Product key={p._id} product={p} />)}</div>

			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='md'>
					hh.ru
				</Tag>
			</div>
			{firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
			{page.advantages && page.advantages[0]?.title.length > 0 && (
				<>
					<Htag tag='h2'>Преимущества</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map((t) => (
				<Tag key={t} color='primary'>
					{t}
				</Tag>
			))}
		</div>
	);
};
