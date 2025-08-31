'use client';

import { useEffect, useState } from 'react';
import { Htag, Button, Paragraph, Tag, Rating } from '@/shared';
// import type { Metadata } from 'next';

// export async function generateMetadata(): Promise<Metadata> {
// 	return {
// 		title: 'Computed meta',
// 	};
// }

export default function Home() {
	const [counter, setCounter] = useState(4);

	useEffect(() => {
		console.log(counter);
	});
	return (
		<div>
			{counter}
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>
				Кнопка
			</Button>
			<Button appearance='ghost' arrow='down'>
				Кнопка
			</Button>
			<Paragraph size='lg'>Big</Paragraph>
			<Paragraph>MIDDLE</Paragraph>
			<Paragraph size='sm'>Small</Paragraph>
			<Tag size='sm'>Ghost</Tag>
			<Tag color='red'>Большой</Tag>
			<Tag size='sm' color='green'>
				Green
			</Tag>
			<Tag size='sm' color='primary'>
				Primary
			</Tag>
			<Rating isEditable rating={counter} setRating={setCounter} />
		</div>
	);
}
