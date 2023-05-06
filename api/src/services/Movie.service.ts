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
		this.apiKey = `api_key=${process.env.TMDB_API_KEY}`;
	}

	async findMostPopular(args: QueryPopularMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/popular?${this.apiKey}&language=${args?.options?.language}&page=${args?.options?.page}`,
		);
	}

	async findTopRated(args: QueryTopRatedMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/top_rated?${this.apiKey}&language=${args?.options?.language}&page=${args?.options?.page}&region=${args?.options?.region}`,
		);
	}

	async findUpcoming(args: QueryUpcomingMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/upcoming?${this.apiKey}&language=${args?.options?.language}&page=${args?.options?.page}`,
		);
	}

	async findNowPlaying(
		args: QueryNowPlayingMoviesArgs,
	): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/now_playing?${this.apiKey}&language=${args?.options?.language}&page=${args?.options?.page}`,
		);
	}

	async findMovieDetails(args: QueryMovieDetailsArgs): Promise<MovieDetails> {
		return this.get(
			`${this.baseURL}/${args.movieId}?${this.apiKey}&language=${args?.options?.language}`,
		);
	}

	async findCastByMovie(args: QueryCastMovieArgs): Promise<MovieCastResponse> {
		return this.get(
			`${this.baseURL}/${args.movieId}/credits?${this.apiKey}&language=${args?.options?.language}`,
		);
	}

	async findCrewByMovie(args: QueryCrewMovieArgs): Promise<MovieCrewResponse> {
		return this.get(
			`${this.baseURL}/${args.movieId}/credits?${this.apiKey}&language=${args?.options?.language}`,
		);
	}

	async findSimilarMovies(
		args: QuerySimilarMovieArgs,
	): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/${args.movieId}/similar?${this.apiKey}&language=${args?.options?.language}&page=${args?.options?.page}`,
		);
	}

	async findImagesByMovie(
		args: QueryImagesMovieArgs,
	): Promise<MovieImageResponse> {
		return this.get(
			`${this.baseURL}/${args.movieId}/images?${this.apiKey}&language=${args?.options?.language}`,
		);
	}

	async findKeywordsByMovie(
		args: QueryKeywordsMovieArgs,
	): Promise<MoviesKeywordsResponse> {
		return this.get(`${this.baseURL}/${args.movieId}/keywords?${this.apiKey}`);
	}
}

export default MoviesService;
