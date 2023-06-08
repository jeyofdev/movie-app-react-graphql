import type { LinguiConfig } from '@lingui/conf';

const config: LinguiConfig = {
	locales: ['en', 'fr', 'es', 'de'],
	catalogs: [
		{
			path: 'src/locales/{locale}',
			include: ['src'],
		},
	],
};

export default config;
