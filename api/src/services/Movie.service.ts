import { RESTDataSource } from '@apollo/datasource-rest';
import {
	MovieCastResponse,
	MovieCrewResponse,
	MovieDetails,
	MovieImageResponse,
	MoviesKeywordsResponse,
	MoviesResponse,
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
	RegionEnum,
} from '../__generated__/resolvers-types';
import 'dotenv/config';
import { formatUrlQuery } from '../utils/helpers';

class MovieService extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3/movie';

		if (!process.env.TMDB_API_KEY) {
			throw new Error(
				'The environment variable TMDB_API_KEY must be specified',
			);
		}
		this.apiKey = process.env.TMDB_API_KEY;
	}

	async findMostPopular(args: QueryPopularMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, 'popular', {
				language: args?.options?.language,
				page: args?.options?.page,
				region:
					args?.options?.region !== RegionEnum.En
						? args?.options?.region
						: null,
			}),
		);
	}

	async findTopRated(args: QueryTopRatedMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, 'top_rated', {
				language: args?.options?.language,
				page: args?.options?.page,
				region:
					args?.options?.region !== RegionEnum.En
						? args?.options?.region
						: null,
			}),
		);
	}

	async findUpcoming(args: QueryUpcomingMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, 'upcoming', {
				language: args?.options?.language,
				page: args?.options?.page,
				region:
					args?.options?.region !== RegionEnum.En
						? args?.options?.region
						: null,
			}),
		);
	}

	async findNowPlaying(
		args: QueryNowPlayingMoviesArgs,
	): Promise<MoviesResponse> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, 'now_playing', {
				language: args?.options?.language,
				page: args?.options?.page,
				region:
					args?.options?.region !== RegionEnum.En
						? args?.options?.region
						: null,
			}),
		);
	}

	async findMovieDetails(args: QueryMovieDetailsArgs): Promise<MovieDetails> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, String(args.movieId), {
				language: args?.options?.language,
			}),
		);
	}

	async findCastByMovie(
		args: QueryCastByMovieArgs,
	): Promise<MovieCastResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.movieId)}/credits`,
				{
					language: args?.options?.language,
				},
			),
		);
	}

	async findCrewByMovie(
		args: QueryCrewByMovieArgs,
	): Promise<MovieCrewResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.movieId)}/credits`,
				{
					language: args?.options?.language,
				},
			),
		);
	}

	async findSimilarMovies(
		args: QuerySimilarMovieArgs,
	): Promise<MoviesResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.movieId)}/similar`,
				{
					language: args?.options?.language,
					page: args?.options?.page,
				},
			),
		);
	}

	async findImagesByMovie(
		args: QueryImagesByMovieArgs,
	): Promise<MovieImageResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.movieId)}/images`,
			),
		);
	}

	async findKeywordsByMovie(
		args: QueryKeywordsByMovieArgs,
	): Promise<MoviesKeywordsResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.movieId)}/keywords`,
			),
		);
	}
}

export default MovieService;
