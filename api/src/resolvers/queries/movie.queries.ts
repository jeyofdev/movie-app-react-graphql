import { IContext } from '../../context';
import setMoviesResult from '../../utils/movies';
import {
	QueryCastByMovieArgs,
	QueryCrewByMovieArgs,
	QueryImagesByMovieArgs,
	QueryKeywordsByMovieArgs,
	QueryMovieDetailsArgs,
	QueryNowPlayingMoviesArgs,
	QueryPopularMoviesArgs,
	QuerySimilarMovieArgs,
	QueryTopRatedMoviesArgs,
	QueryUpcomingMoviesArgs,
} from '../../__generated__/resolvers-types';
import NotFoundError from '../../errors/NotFound.error';

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
			throw new NotFoundError('No movie was found');
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
			throw new NotFoundError('No movie was found');
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
			throw new NotFoundError('No movie was found');
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
			throw new NotFoundError('No movie was found');
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
			throw new NotFoundError('No movie was found with this id', 'movieId');
		}
	},

	castByMovie: async (
		_: never,
		args: QueryCastByMovieArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.movies.findCastByMovie(args);
		} catch (error) {
			throw new NotFoundError('No movie was found with this id', 'movieId');
		}
	},

	crewByMovie: async (
		_: never,
		args: QueryCrewByMovieArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.movies.findCrewByMovie(args);
		} catch (error) {
			throw new NotFoundError('No movie was found with this id', 'movieId');
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
			throw new NotFoundError('No movie was found with this id', 'movieId');
		}
	},

	imagesByMovie: async (
		_: never,
		args: QueryImagesByMovieArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.movies.findImagesByMovie(args);
		} catch (error) {
			throw new NotFoundError('No movie was found with this id', 'movieId');
		}
	},

	keywordsByMovie: async (
		_: never,
		args: QueryKeywordsByMovieArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.movies.findKeywordsByMovie(args);
		} catch (error) {
			throw new NotFoundError('No movie was found with this id', 'movieId');
		}
	},
};

export default movieQueries;
