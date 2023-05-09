module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'airbnb-base',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
		},
		ecmaVersion: 'latest',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		createDefaultProgram: true,
	},
	plugins: ['react-refresh'],
	settings: {
		react: { version: 'detect' },
	},
	ignorePatterns: ['.eslintrc.cjs', '.codegen.ts'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'import/no-extraneous-dependencies': 'off',
		'react-refresh/only-export-components': 'warn',
	},
};
