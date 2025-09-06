import { getMenu } from '@/entities';
import { MenuProps } from './Menu.props';

export const Menu = async ({ ...props }: MenuProps) => {
	const { menu } = await getMenu();

	return (
		<div {...props}>
			{' '}
			<ul>
				{menu.map((m) => (
					<li key={m._id?.secondCategory}>{m._id?.secondCategory}</li>
				))}
			</ul>
		</div>
	);
};
