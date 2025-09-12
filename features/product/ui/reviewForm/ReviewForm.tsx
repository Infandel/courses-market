import { ReviewFormProps } from './ReviewForm.props';
import { Button, Input, Rating, Textarea } from '@/shared';
import CloseIcon from '../../assets/close.svg';
import styles from './ReviewForm.module.css';
import clsx from 'clsx';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
	return (
		<>
			<div className={clsx(styles.reviewForm, className)} {...props}>
				<Input placeholder='Имя' />
				<Input placeholder='Заголовок отзыва' className={styles.title} />
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Rating rating={0} />
				</div>
				<Textarea className={styles.description} placeholder='Текст отзыва' rows={6} />
				<div className={styles.submit}>
					<Button appearance='primary' className={styles.description}>
						Отправить
					</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			<div className={styles.success}>
				<div className={styles.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
				<CloseIcon className={styles.close} />
			</div>
		</>
	);
};
