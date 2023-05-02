module.exports = {
	env: {
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		project: ['./tsconfig.json'],
		createDefaultProgram: true,
	},
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['.eslintrc.cjs', 'dist'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'import/no-extraneous-dependencies': 'off',
	},
};
