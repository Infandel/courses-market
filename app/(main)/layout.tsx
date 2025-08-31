import { Sidebar, Header, Footer } from '@/widgets';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default MainLayout;
