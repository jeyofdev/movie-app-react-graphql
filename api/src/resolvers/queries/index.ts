import { QueryResolvers } from '../../__generated__/resolvers-types';
import movieQueries from './movie.queries';
import collectionQueries from './collection.queries';
import personQueries from './person.queries';

const queries: QueryResolvers = {
	Query: {
		...movieQueries,
		...collectionQueries,
		...personQueries,
	},
};

export default queries;
