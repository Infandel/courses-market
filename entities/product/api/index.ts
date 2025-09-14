import { API_ROUTES } from '@/shared';
import { IReviewForm, ProductModel } from '../interfaces/product.interface';

export async function getProducts(category: string, limit = 10): Promise<ProductModel[] | null> {
	try {
		const res = await fetch(API_ROUTES.product.find, {
			method: 'POST',
			body: JSON.stringify({
				category,
				limit,
			}),
			headers: new Headers({ 'content-type': 'application/json' }),
		});

		if (!res.ok) return null;

		return res.json();
	} catch (e) {
		console.error(e);
		return null;
	}
}

export async function sendReview(formData: IReviewForm, productId: string): Promise<{ message: string } | null> {
	try {
		const res = await fetch(API_ROUTES.review.createDemo, {
			method: 'POST',
			body: JSON.stringify({
				...formData,
				productId,
			}),
			headers: new Headers({ 'content-type': 'application/json' }),
		});

		if (!res.ok) return null;

		return res.json();
	} catch (e) {
		console.error(e);
		return null;
	}
}
