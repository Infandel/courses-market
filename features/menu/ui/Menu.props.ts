import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'sm' | 'md';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}
