import { IContext } from 'context';
import setMoviesResult from '../utils/movies';
import { QueryResolvers } from '../__generated__/resolvers-types';

const queries: QueryResolvers = {
	Query: {
		popularMovies: async (_: never, __: never, context: IContext) => {
			try {
				const movies = await context.dataSource.movies.findMostPopular();
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		topRatedMovies: async (_: never, __: never, context: IContext) => {
			try {
				const movies = await context.dataSource.movies.findTopRated();
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		upcomingMovies: async (_: never, __: never, context: IContext) => {
			try {
				const movies = await context.dataSource.movies.findUpcoming();
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		nowPlayingMovies: async (_: never, __: never, context: IContext) => {
			try {
				const movies = await context.dataSource.movies.findNowPlaying();
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},
	},
};

export default queries;
