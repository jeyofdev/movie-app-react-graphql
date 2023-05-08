import { RESTDataSource } from '@apollo/datasource-rest';
import {
	MovieCastResponse,
	MovieCrewResponse,
	MovieDetails,
	MovieImageResponse,
	MoviesKeywordsResponse,
	MoviesResponse,
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
} from '__generated__/resolvers-types';
import 'dotenv/config';
import { formatUrlQuery } from '../utils/helpers';

class MoviesService extends RESTDataSource {
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
				region: args?.options?.region,
			}),
		);
	}

	async findTopRated(args: QueryTopRatedMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, 'top_rated', {
				language: args?.options?.language,
				page: args?.options?.page,
				region: args?.options?.region,
			}),
		);
	}

	async findUpcoming(args: QueryUpcomingMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, 'upcoming', {
				language: args?.options?.language,
				page: args?.options?.page,
				region: args?.options?.region,
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
				region: args?.options?.region,
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

	async findCastByMovie(args: QueryCastMovieArgs): Promise<MovieCastResponse> {
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

	async findCrewByMovie(args: QueryCrewMovieArgs): Promise<MovieCrewResponse> {
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
		args: QueryImagesMovieArgs,
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
		args: QueryKeywordsMovieArgs,
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

export default MoviesService;
