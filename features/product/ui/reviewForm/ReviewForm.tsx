import { ReviewFormProps } from './ReviewForm.props';
import { Button, Input, Rating, Textarea } from '@/shared';
import CloseIcon from '../../assets/close.svg';
import styles from './ReviewForm.module.css';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import type { IReviewForm } from './ReviewForm.interface';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
	const { register, control, handleSubmit } = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={clsx(styles.reviewForm, className)} {...props}>
				<Input {...register('name')} placeholder='Имя' />
				<Input {...register('title')} placeholder='Заголовок отзыва' className={styles.title} />
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						render={({ field }) => <Rating isEditable rating={field.value} setRating={field.onChange} />}
					/>
				</div>
				<Textarea {...register('description')} className={styles.description} placeholder='Текст отзыва' rows={6} />
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
		</form>
	);
};
