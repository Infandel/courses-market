import { SortEnum } from '@/entities';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sort: SortEnum;
	setSort: (sort: SortEnum) => void;
}
