import { QueryResolvers } from '../../__generated__/resolvers-types';
import movieQueries from './movie.queries';
import collectionQueries from './collection.queries';
import personQueries from './person.queries';
import keywordQueries from './keyword.queries';
import parents from '../parents';
import genreQueries from './genre.queries';
import discoverQueries from './discover.queries';
import searchQueries from './search.queries';

const queries: QueryResolvers = {
	...parents,
	Query: {
		...movieQueries,
		...collectionQueries,
		...personQueries,
		...keywordQueries,
		...genreQueries,
		...discoverQueries,
		...searchQueries,
	},
};

export default queries;
