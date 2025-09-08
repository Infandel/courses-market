import { Card, Htag, Tag } from '@/shared';
import { TopPageProps } from './TopPage.props';
import styles from './TopPage.module.css';
// import clsx from 'clsx';

export const TopPage = async ({ page, products, firstCategory }: TopPageProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				<Tag color='grey' size='md'>
					{products.length}
				</Tag>
				<span>Сортировка</span>
			</div>
			<div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>

			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='md'>
					hh.ru
				</Tag>
			</div>
			<div className={styles.hh}>
				<Card className={styles.hhCount}>
					<div className={styles.hhStatTitle}>Всего вакансий</div>
					<div className={styles.hhStatCount}>{page.hh.count}</div>
				</Card>
			</div>
		</div>
	);
};
