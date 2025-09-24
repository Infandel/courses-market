import { HeaderProps } from './Header.props';
import { MobileSidebar } from '../mobileSidebar/MobileSidebar';
import { getMenu } from '@/entities';

export const Header = async ({ className, ...props }: HeaderProps) => {
	const { menu, firstCategory } = await getMenu();

	return (
		<header className={className} {...props}>
			<MobileSidebar menu={menu} firstCategory={firstCategory} />
		</header>
	);
};
