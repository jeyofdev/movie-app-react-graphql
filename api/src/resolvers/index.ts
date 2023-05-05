import { Resolvers } from '__generated__/resolvers-types';
import queries from './queries';

const resolvers: Resolvers = {
	LanguageEnum: {
		FR: 'fr-FR',
		EN: 'en-EN',
		US: 'en-US',
		ES: 'es-ES',
	},
	...queries,
};

export default resolvers;
