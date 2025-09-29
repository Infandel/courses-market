import { TextareaProps } from './Textarea.props';
import clsx from 'clsx';
import styles from './Textarea.module.scss';
import { ForwardedRef, forwardRef } from 'react';

export const Textarea = forwardRef(function Textarea(
	{ className, error, ...props }: TextareaProps,
	ref: ForwardedRef<HTMLTextAreaElement>
) {
	return (
		<div className={clsx(styles.textareaWrapper, className)}>
			<textarea
				className={clsx(styles.textarea, {
					[styles.error]: error,
				})}
				{...props}
				ref={ref}
			/>
			{error && (
				<span role='alert' className={styles.errorMessage}>
					{error.message}
				</span>
			)}
		</div>
	);
});
