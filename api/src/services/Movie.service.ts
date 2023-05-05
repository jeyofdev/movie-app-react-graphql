import { RESTDataSource } from '@apollo/datasource-rest';
import {
	MovieCastResponse,
	MovieCrewResponse,
	MovieDetails,
	MovieImageResponse,
	MoviesKeywordsResponse,
	MoviesResponse,
} from '__generated__/resolvers-types';
import 'dotenv/config';
import { IListOptions, IMoviesArgs } from '../types';

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

	async findMostPopular(options: IListOptions): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/popular?${this.apiKey}&language=${options.language}&page=${options.page}`,
		);
	}

	async findTopRated(options: IListOptions): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/top_rated?${this.apiKey}&language=${options.language}&page=${options.page}`,
		);
	}

	async findUpcoming(options: IListOptions): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/upcoming?${this.apiKey}&language=${options.language}&page=${options.page}`,
		);
	}

	async findNowPlaying(options: IListOptions): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/now_playing?${this.apiKey}&language=${options.language}&page=${options.page}`,
		);
	}

	async findMovieDetails(args: IMoviesArgs): Promise<MovieDetails> {
		return this.get(
			`${this.baseURL}/${args.movieId}?${this.apiKey}&language=${args.options.language}`,
		);
	}

	async findCastByMovie(args: IMoviesArgs): Promise<MovieCastResponse> {
		return this.get(
			`${this.baseURL}/${args.movieId}/credits?${this.apiKey}&language=${args.options.language}`,
		);
	}

	async findCrewByMovie(args: IMoviesArgs): Promise<MovieCrewResponse> {
		return this.get(
			`${this.baseURL}/${args.movieId}/credits?${this.apiKey}&language=${args.options.language}`,
		);
	}

	async findSimilarMovies(args: IMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}/${args.movieId}/similar?${this.apiKey}&language=${args.options.language}&page=${args.options.page}`,
		);
	}

	async findImagesByMovie(args: IMoviesArgs): Promise<MovieImageResponse> {
		return this.get(
			`${this.baseURL}/${args.movieId}/images?${this.apiKey}&language=${args.options.language}`,
		);
	}

	async findKeywordsByMovie(movieId: number): Promise<MoviesKeywordsResponse> {
		return this.get(`${this.baseURL}/${movieId}/keywords?${this.apiKey}`);
	}
}

export default MoviesService;
