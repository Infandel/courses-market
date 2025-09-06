import { TopLevelCategory } from '@/entities';
import { FirstLevelMenuItem } from '../types';
import CoursesIcon from '@/public/assets/courses.svg';
import ServicesIcon from '@/public/assets/services.svg';
import BooksIcon from '@/public/assets/books.svg';
import ProductsIcon from '@/public/assets/products.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];
