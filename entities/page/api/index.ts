import { API_ROUTES } from '@/shared';
import { TopPageModel } from '../interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel | null> {
	try {
		const res = await fetch(API_ROUTES.topPage.byAlias + alias, {
			next: { revalidate: 200 },
		});

		if (!res.ok) return null;

		return res.json();
	} catch (e) {
		console.error(e);
		return null;
	}
}
