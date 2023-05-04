module.exports = {
	env: {
		es2021: true,
		node: true,
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
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
			node: {
				extensions: ['.js', '.ts'],
			},
		},
		'import/ignore': ['node_modules'],
	},
	ignorePatterns: ['.eslintrc.cjs'],
	rules: {
		'no-console': 'warn',
		'import/no-extraneous-dependencies': 'off',
		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': 'off',
	},
};
