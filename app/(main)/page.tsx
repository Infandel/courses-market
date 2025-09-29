import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Домашняя страница',
	};
}

export default function Home() {
	return <div>Нужно выбрать один из разделов, перечисленных слева</div>;
}
