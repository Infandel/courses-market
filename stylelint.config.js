// stylelint.config.js
module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recess-order'],
	plugins: ['stylelint-scss', 'stylelint-order'],
	overrides: [
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
		},
	],
};
