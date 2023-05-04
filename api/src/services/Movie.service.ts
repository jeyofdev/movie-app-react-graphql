import { RESTDataSource } from '@apollo/datasource-rest';
import { MovieResponse } from '__generated__/resolvers-types';
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

	async findMostPopular(): Promise<MovieResponse> {
		return this.get(`${this.baseURL}/popular?${this.apiKey}`);
	}

	async findTopRated(): Promise<MovieResponse> {
		return this.get(`${this.baseURL}/top_rated?${this.apiKey}`);
	}

	async findUpcoming(): Promise<MovieResponse> {
		return this.get(`${this.baseURL}/upcoming?${this.apiKey}`);
	}

	async findNowPlaying(): Promise<MovieResponse> {
		return this.get(`${this.baseURL}/now_playing?${this.apiKey}`);
	}
}

export default MoviesService;
