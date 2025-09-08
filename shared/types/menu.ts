import { TopLevelCategory } from '@/entities';
import type { JSX } from 'react';

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}
