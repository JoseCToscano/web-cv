module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'jest', 'eslint-comments'],
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:eslint-comments/recommended',
		'plugin:jest/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
	],
	rules: {
		['import/prefer-default-export']: 0,
	},
};