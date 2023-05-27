import { IContext } from '../../context';
import { QuerySearchMoviesArgs } from '../../__generated__/resolvers-types';
import NotFoundError from '../../errors/NotFound.error';

const searchQueries = {
	searchMovies: async (
		_: never,
		args: QuerySearchMoviesArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.search.searchMovies(args);
		} catch (err) {
			throw new NotFoundError('No movies was found');
		}
	},
};

export default searchQueries;
