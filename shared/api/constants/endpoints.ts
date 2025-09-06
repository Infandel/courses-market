export const API_ROUTES = {
	topPage: {
		find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		byAlias: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/',
	},
	product: {
		find: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
	},
	review: {
		createDemo: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/create-demo',
	},
};
