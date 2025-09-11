import { TextareaProps } from './Textarea.props';
import clsx from 'clsx';
import styles from './Textarea.module.scss';

export const Textarea = ({ className, ...props }: TextareaProps) => {
	return <textarea className={clsx(className, styles.textarea)} {...props} />;
};
