import { Sidebar, Header, Footer } from '@/widgets';
import { ReactNode } from 'react';
import styles from './layout.module.css';

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.body}>{children}</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export default MainLayout;
