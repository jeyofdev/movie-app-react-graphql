import { QueryResolvers } from '../../__generated__/resolvers-types';
import movieQueries from './movie.queries';
import collectionQueries from './collection.queries';
import personQueries from './person.queries';
import keywordQueries from './keyword.queries';

const queries: QueryResolvers = {
	Query: {
		...movieQueries,
		...collectionQueries,
		...personQueries,
		...keywordQueries,
	},
};

export default queries;
