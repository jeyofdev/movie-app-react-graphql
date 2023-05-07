import { IContext } from '../../context';
import setMoviesResult from '../../utils/movies';
import {
	QueryCastMovieArgs,
	QueryCrewMovieArgs,
	QueryImagesMovieArgs,
	QueryKeywordsMovieArgs,
	QueryMovieDetailsArgs,
	QueryNowPlayingMoviesArgs,
	QueryPopularMoviesArgs,
	QuerySimilarMovieArgs,
	QueryTopRatedMoviesArgs,
	QueryUpcomingMoviesArgs,
} from '../../__generated__/resolvers-types';

const movieQueries = {
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
			return await context.dataSource.movies.findMovieDetails(args);
		} catch (error) {
			throw new Error('error');
		}
	},

	castMovie: async (_: never, args: QueryCastMovieArgs, context: IContext) => {
		try {
			return await context.dataSource.movies.findCastByMovie(args);
		} catch (error) {
			throw new Error('error');
		}
	},

	crewMovie: async (_: never, args: QueryCrewMovieArgs, context: IContext) => {
		try {
			return await context.dataSource.movies.findCrewByMovie(args);
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
			return await context.dataSource.movies.findSimilarMovies(args);
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
			return await context.dataSource.movies.findImagesByMovie(args);
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
			return await context.dataSource.movies.findKeywordsByMovie(args);
		} catch (error) {
			throw new Error('error');
		}
	},
};

export default movieQueries;
