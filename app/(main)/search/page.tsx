import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Search',
	};
}

export default async function Search() {
	return <div>Search</div>;
}
