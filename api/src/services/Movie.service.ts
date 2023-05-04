import { RESTDataSource } from '@apollo/datasource-rest';
import { Movie, MoviesResponse } from '__generated__/resolvers-types';
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

	async findMostPopular(): Promise<MoviesResponse> {
		return this.get(`${this.baseURL}/popular?${this.apiKey}`);
	}

	async findTopRated(): Promise<MoviesResponse> {
		return this.get(`${this.baseURL}/top_rated?${this.apiKey}`);
	}

	async findUpcoming(): Promise<MoviesResponse> {
		return this.get(`${this.baseURL}/upcoming?${this.apiKey}`);
	}

	async findNowPlaying(): Promise<MoviesResponse> {
		return this.get(`${this.baseURL}/now_playing?${this.apiKey}`);
	}

	async findMovieDetails(movieId: number): Promise<Movie> {
		return this.get(`${this.baseURL}/${movieId}?${this.apiKey}`);
	}

	async findCastByMovie(movieId: number): Promise<Movie> {
		return this.get(`${this.baseURL}/${movieId}/credits?${this.apiKey}`);
	}

	async findSimilarMovies(movieId: number): Promise<Movie> {
		return this.get(`${this.baseURL}/${movieId}/similar?${this.apiKey}`);
	}

	async findCrewByMovie(movieId: number): Promise<Movie> {
		return this.get(`${this.baseURL}/${movieId}/credits?${this.apiKey}`);
	}
}

export default MoviesService;
