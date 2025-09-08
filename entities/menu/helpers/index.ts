import { firstLevelMenu } from '@/shared';
import { getMenu } from '../api';

interface AllowedPath {
	type: string;
	alias: string;
}

export async function getAllowedPaths(): Promise<AllowedPath[]> {
	let allowedPaths: AllowedPath[] = [];
	for (const flm of firstLevelMenu) {
		const { menu } = await getMenu(flm.id);

		allowedPaths = allowedPaths.concat(menu.flatMap((m) => m.pages.map((p) => ({ type: flm.route, alias: p.alias }))));
	}

	return allowedPaths;
}
