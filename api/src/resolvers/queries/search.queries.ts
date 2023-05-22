import { IContext } from '../../context';
import { QuerySearchMoviesByGenreArgs } from '../../__generated__/resolvers-types';
import NotFoundError from '../../errors/NotFound.error';

const searchQueries = {
	searchMoviesByGenre: async (
		_: never,
		args: QuerySearchMoviesByGenreArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.search.findMoviesByGenre(args);
		} catch (err) {
			throw new NotFoundError('No movies was found');
		}
	},
};

export default searchQueries;
