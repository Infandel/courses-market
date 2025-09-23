// stylelint.config.js
module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recess-order'],
	plugins: ['stylelint-scss', 'stylelint-order'],
	rules: {
		'selector-class-pattern': ['^[a-zA-Z0-9]+$', { resolveNestedSelectors: true }],
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{
				ignoreShorthands: ['grid-template'],
			},
		],
		'media-feature-range-notation': 'prefix',
		'color-function-notation': 'legacy',
	},
	overrides: [
		{
			files: ['**/*.scss'],
			customSyntax: 'postcss-scss',
		},
	],
};
