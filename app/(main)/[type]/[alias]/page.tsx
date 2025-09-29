import { getAllowedPaths, getPage, getProducts } from '@/entities';
import { TopPage } from '@/widgets';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ type: string; alias: string }>;
}): Promise<Metadata> {
	const { alias, type } = await params;
	const page = await getPage(alias);

	return {
		title: page?.metaTitle,
		description: page?.metaDescription,
		openGraph: {
			title: page?.metaTitle,
			description: page?.metaDescription,
			url: `/${type}/${alias}`,
			type: 'article',
		},
	};
}

export async function generateStaticParams() {
	return await getAllowedPaths();
}

export default async function Page({ params }: { params: Promise<{ type: string; alias: string }> }) {
	const { alias, type } = await params;

	const allowedPaths = await getAllowedPaths();

	const allowedPath = allowedPaths.find((p) => p.type === type && p.alias === alias);

	if (!allowedPath) return notFound();

	const page = await getPage(alias);

	const products = await getProducts(page?.category || 'Photoshop');

	if (!page) return notFound();

	return <TopPage firstCategory={type === 'courses' ? 0 : 1} page={page} products={products} />;
}
