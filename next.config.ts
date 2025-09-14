import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	images: {
		remotePatterns: [
			new URL('https://old-images.hb.ru-msk.vkcs.cloud/**'),
			new URL('https://old-images.hb.ru-msk.vkcs.cloudhttp/**'),
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						icon: true,
					},
				},
			],
		});
		return config;
	},
};

export default nextConfig;
