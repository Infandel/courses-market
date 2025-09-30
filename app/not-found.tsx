import { Button } from '@/shared';
import Link from 'next/link';
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
	title: 'Не найдено',
	description: 'Страница, которую вы искали, не существует.',
};

export default function NotFound() {
	return (
		<div className='notFound'>
			<h2>Не найдено</h2>
			<p>Нет возможности найти запрошенный ресурс</p>
			<Link href='/'>
				<Button appearance='primary'>Вернуться на главную страницу</Button>
			</Link>
		</div>
	);
}
