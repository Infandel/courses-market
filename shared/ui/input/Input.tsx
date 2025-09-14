import clsx from 'clsx';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(function Input(
	{ className, error, ...props }: InputProps,
	ref: ForwardedRef<HTMLInputElement>
) {
	return (
		<div className={clsx(styles.inputWrapper, className)}>
			<input
				className={clsx(styles.input, {
					[styles.error]: error,
				})}
				{...props}
				ref={ref}
			/>
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});
