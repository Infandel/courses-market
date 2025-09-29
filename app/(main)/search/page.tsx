import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Поиск по сайту',
	};
}

export default async function Search() {
	return <div>Work in progress...</div>;
}
