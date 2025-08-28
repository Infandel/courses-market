// svgr.config.js
module.exports = {
	dimensions: true, // 👈 keeps width/height
	svgo: true,
	svgoConfig: {
		plugins: [
			{
				name: 'removeViewBox',
				active: false, // keep viewBox for scaling
			},
		],
	},
};
