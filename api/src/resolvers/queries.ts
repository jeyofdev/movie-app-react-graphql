import { IContext } from 'context';
import setMoviesResult from '../utils/movies';
import { QueryResolvers } from '../__generated__/resolvers-types';
import { IListOptions } from '../types';

const queries: QueryResolvers = {
	Query: {
		popularMovies: async (_: never, args: IListOptions, context: IContext) => {
			try {
				const movies = await context.dataSource.movies.findMostPopular(args);
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		topRatedMovies: async (_: never, args: IListOptions, context: IContext) => {
			try {
				const movies = await context.dataSource.movies.findTopRated(args);
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		upcomingMovies: async (_: never, args: IListOptions, context: IContext) => {
			try {
				const movies = await context.dataSource.movies.findUpcoming(args);
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		nowPlayingMovies: async (
			_: never,
			args: IListOptions,
			context: IContext,
		) => {
			try {
				const movies = await context.dataSource.movies.findNowPlaying(args);
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		movieDetails: async (
			_: never,
			args: { movieId: number; options: IListOptions },
			context: IContext,
		) => {
			try {
				return context.dataSource.movies.findMovieDetails(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		castMovie: async (
			_: never,
			args: { movieId: number; options: IListOptions },
			context: IContext,
		) => {
			try {
				return context.dataSource.movies.findCastByMovie(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		crewMovie: async (
			_: never,
			args: { movieId: number; options: IListOptions },
			context: IContext,
		) => {
			try {
				return context.dataSource.movies.findCrewByMovie(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		similarMovie: async (
			_: never,
			args: { movieId: number; options: IListOptions },
			context: IContext,
		) => {
			try {
				return context.dataSource.movies.findSimilarMovies(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		imagesMovie: async (
			_: never,
			args: { movieId: number; options: IListOptions },
			context: IContext,
		) => {
			try {
				return context.dataSource.movies.findImagesByMovie(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		keywordsMovie: async (
			_: never,
			args: { movieId: number },
			context: IContext,
		) => {
			try {
				return context.dataSource.movies.findKeywordsByMovie(args.movieId);
			} catch (error) {
				throw new Error('error');
			}
		},

		moviesByCollection: async (
			_: never,
			args: { collectionId: number; options: IListOptions },
			context: IContext,
		) => {
			try {
				return context.dataSource.collections.findMoviesByCollection(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		personDetails: async (
			_: never,
			args: { personId: number; options: IListOptions },
			context: IContext,
		) => {
			try {
				return context.dataSource.persons.findPersonDetails(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		personCastByMovie: async (
			_: never,
			args: { personId: number; options: IListOptions },
			context: IContext,
		) => {
			try {
				return context.dataSource.persons.findCastByPerson(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		personCrewByMovie: async (
			_: never,
			args: { personId: number; options: IListOptions },
			context: IContext,
		) => {
			try {
				return context.dataSource.persons.findCrewByPerson(args);
			} catch (error) {
				throw new Error('error');
			}
		},
	},
};

export default queries;
