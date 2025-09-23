import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Up from './assets/up.svg';
import Cross from './assets/cross.svg';
import Burger from './assets/burger.svg';

export const icons = {
	up: Up,
	cross: Cross,
	burger: Burger,
};

type IconName = keyof typeof icons;

export interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconName;
	appearance: 'white' | 'primary';
}
