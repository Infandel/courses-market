import { ReviewModel } from '@/entities';
import type { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review: ReviewModel;
}
