import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'sm' | 'md';
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}
