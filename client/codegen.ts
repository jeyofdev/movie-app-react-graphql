import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: '../api/src/schema/schema.graphql',
	documents: './src/graphql/**/*.graphql',
	generates: {
		'./src/graphql/__generated__/graphql-type.ts': {
			plugins: [
				{
					add: {
						content: '/* eslint-disable */',
					},
				},
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
			],
			config: {
				withHooks: true,
			},
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;
