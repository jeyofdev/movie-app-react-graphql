import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: './src/schema/schema.graphql',
	generates: {
		'src/__generated__/resolvers-types.ts': {
			plugins: [
				{
					add: {
						content: '/* eslint-disable */',
					},
				},
				'typescript',
				'typescript-resolvers',
			],
			config: {
				useIndexSignature: true,
				contextype: '../context#IContext',
			},
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;
