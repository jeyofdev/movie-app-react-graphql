module.exports = {
	locales: ['en', 'fr', 'es', 'de'],
	catalogs: [
		{
			path: 'src/locales/{locale}/messages',
			include: ['src'],
		},
	],
	format: 'po',
};
