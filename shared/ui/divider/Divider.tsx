import { DividerProps } from './Divider.props';
import styles from './Divider.module.css';
import clsx from 'clsx';

export const Divider = ({ className, ...props }: DividerProps) => {
	return <hr className={clsx(className, styles.hr)} {...props} />;
};
