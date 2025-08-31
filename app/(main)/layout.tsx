import { Sidebar, Header, Footer } from '@/widgets';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<Sidebar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
