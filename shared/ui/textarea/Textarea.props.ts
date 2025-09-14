import type { TextareaHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: FieldError;
}
