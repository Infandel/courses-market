import { ReviewFormProps } from './ReviewForm.props';
import { Button, Input, Rating, Textarea } from '@/shared';
import CloseIcon from '../../assets/close.svg';
import styles from './ReviewForm.module.css';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, sendReview } from '@/entities';
import { useState } from 'react';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const onSubmit = async (formData: IReviewForm) => {
		const data = await sendReview(formData, productId);

		if (data?.message) {
			setIsSuccess(true);
			reset();
		} else {
			setError('Что-то пошло не так, попробуйте обновить страницу');
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={clsx(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', { required: { value: true, message: 'Заполните имя' } })}
					error={errors.name}
					placeholder='Имя'
				/>
				<Input
					{...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
					error={errors.title}
					placeholder='Заголовок отзыва'
					className={styles.title}
				/>
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Поставьте оценку' } }}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', { required: { value: true, message: 'Заполните описание' } })}
					error={errors.description}
					placeholder='Текст отзыва'
					rows={6}
					className={styles.description}
				/>
				<div className={styles.submit}>
					<Button appearance='primary' className={styles.description}>
						Отправить
					</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			{isSuccess && (
				<div className={clsx(styles.panel, styles.success)}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
					<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
				</div>
			)}
			{error && (
				<div className={clsx(styles.panel, styles.error)}>
					{error}
					<CloseIcon className={styles.close} onClick={() => setError(null)} />
				</div>
			)}
		</form>
	);
};
