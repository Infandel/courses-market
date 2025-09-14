import type { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError;
}
