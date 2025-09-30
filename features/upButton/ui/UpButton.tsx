'use client';

import { useEffect } from 'react';
import styles from './UpButton.module.css';
import { IconButton, useScrollY } from '@/shared';
import { motion, useAnimate, usePresence } from 'framer-motion';

export const UpButton = () => {
	const [isPresent, safeToRemove] = usePresence();
	const [scope, animate] = useAnimate();
	const y = useScrollY();

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				await animate(scope.current, { opacity: y / document.body.scrollHeight });
			};

			enterAnimation();
		} else {
			const exitAnimation = async () => {
				await animate(scope.current, { opacity: 0 });
				safeToRemove();
			};

			exitAnimation();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPresent, y]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<motion.div ref={scope} className={styles.upButton} initial={{ opacity: 0 }}>
			<IconButton appearance='primary' icon='up' onClick={scrollToTop} aria-label='Наверх' />
		</motion.div>
	);
};
