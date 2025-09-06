import { API_ROUTES } from '@/shared';
import { MenuItem } from '../interfaces/menu.interface';

const FIRST_CATEGORY = 0;

export async function getMenu(firstCategory = FIRST_CATEGORY): Promise<{ menu: MenuItem[]; firstCategory: number }> {
	try {
		const res = await fetch(API_ROUTES.topPage.find, {
			method: 'POST',
			body: JSON.stringify({
				firstCategory,
			}),
			headers: new Headers({ 'content-type': 'application/json' }),
		});

		return {
			menu: await res.json(),
			firstCategory,
		};
	} catch (e) {
		console.error(e);
		return { menu: [], firstCategory };
	}
}
