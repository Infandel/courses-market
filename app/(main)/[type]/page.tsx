import { firstLevelMenu } from '@/shared';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ type: string }> }) {
	const { type } = await params;

	const firstCategoryItem = firstLevelMenu.find((m) => m.route === type);

	if (!firstCategoryItem) return notFound();

	return <div>Ты находишься в разделе: {type}. Рекомендуется выбрать конкретный подраздел</div>;
}
