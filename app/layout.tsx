import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	preload: true,
	variable: '--font-noto',
});

export const metadata: Metadata = {
	title: 'Лучший выбор Курсов - для Вас!',
	description: 'Пролистайте и Вы не пожалеете. Поиск курсов по актуальным профессиям в онлайн режиме',
	openGraph: {
		locale: 'ru_RU',
		type: 'website',
		siteName: "Infandel's магазин курсов",
		url: 'https://localhost:3000', // change to your hosted URL
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru' className={`${notoSans.className} ${notoSans.variable}`}>
			<body>{children}</body>
		</html>
	);
}
