import { IContext } from 'context';
import setMoviesResult from '../utils/movies';
import { QueryResolvers } from '../__generated__/resolvers-types';
import { ICollectionsArgs, IMoviesArgs, IPersonsArgs } from '../types';

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

		movieDetails: async (_: never, args: IMoviesArgs, context: IContext) => {
			try {
				return context.dataSource.movies.findMovieDetails(args.movieId);
			} catch (error) {
				throw new Error('error');
			}
		},

		castMovie: async (_: never, args: IMoviesArgs, context: IContext) => {
			try {
				return context.dataSource.movies.findCastByMovie(args.movieId);
			} catch (error) {
				throw new Error('error');
			}
		},

		crewMovie: async (_: never, args: IMoviesArgs, context: IContext) => {
			try {
				return context.dataSource.movies.findCrewByMovie(args.movieId);
			} catch (error) {
				throw new Error('error');
			}
		},

		similarMovie: async (_: never, args: IMoviesArgs, context: IContext) => {
			try {
				return context.dataSource.movies.findSimilarMovies(args.movieId);
			} catch (error) {
				throw new Error('error');
			}
		},

		imagesMovie: async (_: never, args: IMoviesArgs, context: IContext) => {
			try {
				return context.dataSource.movies.findImagesByMovie(args.movieId);
			} catch (error) {
				throw new Error('error');
			}
		},

		keywordsMovie: async (_: never, args: IMoviesArgs, context: IContext) => {
			try {
				return context.dataSource.movies.findKeywordsByMovie(args.movieId);
			} catch (error) {
				throw new Error('error');
			}
		},

		moviesByCollection: async (
			_: never,
			args: ICollectionsArgs,
			context: IContext,
		) => {
			try {
				return context.dataSource.collections.findMoviesByCollection(
					args.collectionId,
				);
			} catch (error) {
				throw new Error('error');
			}
		},

		personDetails: async (_: never, args: IPersonsArgs, context: IContext) => {
			try {
				return context.dataSource.persons.findPersonDetails(args.personId);
			} catch (error) {
				throw new Error('error');
			}
		},

		personCastByMovie: async (
			_: never,
			args: IPersonsArgs,
			context: IContext,
		) => {
			try {
				return context.dataSource.persons.findCastByPerson(args.personId);
			} catch (error) {
				throw new Error('error');
			}
		},

		personCrewByMovie: async (
			_: never,
			args: IPersonsArgs,
			context: IContext,
		) => {
			try {
				return context.dataSource.persons.findCrewByPerson(args.personId);
			} catch (error) {
				throw new Error('error');
			}
		},
	},
};

export default queries;
