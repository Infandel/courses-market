import { getMenu, getPage, getProducts } from '@/entities';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Course',
	};
}

export async function generateStaticParams() {
	const { menu } = await getMenu();

	return menu.flatMap((m) => m.pages.map((p) => ({ alias: p.alias })));
}

export default async function Page({ params }: { params: Promise<{ alias: string }> }) {
	const { alias } = await params;

	const page = await getPage(alias);

	if (!page) return notFound();

	const products = await getProducts(page?.category || 'Photoshop');

	return (
		<div>
			My Post: {page?.seoText} {products?.length}
		</div>
	);
}
