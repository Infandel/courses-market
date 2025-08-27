import { Htag, Button } from './components';
import styles from './page.module.css';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Computed meta',
	};
}

export default function Home() {
	return (
		<div className={styles.page}>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost'>Кнопка</Button>
		</div>
	);
}
