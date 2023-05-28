import { IContext } from '../../context';
import {
	QueryDiscoverMoviesByGenreArgs,
	QuerySortMoviesArgs,
} from '../../__generated__/resolvers-types';
import NotFoundError from '../../errors/NotFound.error';

const discoverQueries = {
	discoverMoviesByGenre: async (
		_: never,
		args: QueryDiscoverMoviesByGenreArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.discover.findMoviesByGenre(args);
		} catch (err) {
			throw new NotFoundError('No movies was found');
		}
	},

	sortMovies: async (
		_: never,
		args: QuerySortMoviesArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.discover.sortMovie(args);
		} catch (err) {
			throw new NotFoundError('No movies was found');
		}
	},
};

export default discoverQueries;
