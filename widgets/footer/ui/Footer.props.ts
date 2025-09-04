import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	size?: 'sm' | 'md';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}
