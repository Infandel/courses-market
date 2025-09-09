import { ProductModel, TopLevelCategory, TopPageModel } from '@/entities';

export interface TopPageProps {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[] | null;
}
