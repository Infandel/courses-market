// stylelint.config.js
module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recess-order'],
	plugins: ['stylelint-scss', 'stylelint-order'],
	rules: {
		'selector-class-pattern': ['^[a-zA-Z0-9]+$', { resolveNestedSelectors: true }],
	},
	overrides: [
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
		},
	],
};
