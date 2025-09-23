'use client';

import { useEffect, useState } from 'react';

export const useScrollY = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const isBrowser = typeof window !== 'undefined';

		const handleScroll = () => {
			const currentScrollY = isBrowser ? window.scrollY : 0;
			setScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollY;
};
