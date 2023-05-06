import { IContext } from 'context';
import setMoviesResult from '../utils/movies';
import {
	QueryCastMovieArgs,
	QueryCrewMovieArgs,
	QueryImagesMovieArgs,
	QueryKeywordsMovieArgs,
	QueryMovieDetailsArgs,
	QueryMoviesByCollectionArgs,
	QueryNowPlayingMoviesArgs,
	QueryPersonCastByMovieArgs,
	QueryPersonCrewByMovieArgs,
	QueryPersonDetailsArgs,
	QueryPopularMoviesArgs,
	QueryResolvers,
	QuerySimilarMovieArgs,
	QueryTopRatedMoviesArgs,
	QueryUpcomingMoviesArgs,
} from '../__generated__/resolvers-types';

const queries: QueryResolvers = {
	Query: {
		popularMovies: async (
			_: never,
			args: QueryPopularMoviesArgs,
			context: IContext,
		) => {
			try {
				const movies = await context.dataSource.movies.findMostPopular(args);
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		topRatedMovies: async (
			_: never,
			args: QueryTopRatedMoviesArgs,
			context: IContext,
		) => {
			try {
				const movies = await context.dataSource.movies.findTopRated(args);
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		upcomingMovies: async (
			_: never,
			args: QueryUpcomingMoviesArgs,
			context: IContext,
		) => {
			try {
				const movies = await context.dataSource.movies.findUpcoming(args);
				return setMoviesResult(movies);
			} catch (error) {
				throw new Error('error');
			}
		},

		nowPlayingMovies: async (
			_: never,
			args: QueryNowPlayingMoviesArgs,
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
			args: QueryMovieDetailsArgs,
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
			args: QueryCastMovieArgs,
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
			args: QueryCrewMovieArgs,
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
			args: QuerySimilarMovieArgs,
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
			args: QueryImagesMovieArgs,
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
			args: QueryKeywordsMovieArgs,
			context: IContext,
		) => {
			try {
				return context.dataSource.movies.findKeywordsByMovie(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		moviesByCollection: async (
			_: never,
			args: QueryMoviesByCollectionArgs,
			context: IContext,
		) => {
			try {
				return context.dataSource.collections.findMoviesByCollection(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		translationByCollection: async (
			_: never,
			args: QueryMoviesByCollectionArgs,
			context: IContext,
		) => {
			try {
				return context.dataSource.collections.findTranslationByCollection(args);
			} catch (error) {
				throw new Error('error');
			}
		},

		personDetails: async (
			_: never,
			args: QueryPersonDetailsArgs,
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
			args: QueryPersonCrewByMovieArgs,
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
			args: QueryPersonCastByMovieArgs,
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
