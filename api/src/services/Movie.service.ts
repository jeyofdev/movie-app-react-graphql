import { RESTDataSource } from '@apollo/datasource-rest';
import { MovieResponse } from '__generated__/resolvers-types';

class MoviesService extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3/movie';
		this.apiKey = 'c32de35faa37af988c8bb89cea6c82f1';
	}

	async findMostPopular(): Promise<MovieResponse> {
		return this.get(`${this.baseURL}/popular?api_key=${this.apiKey}`);
	}
}

export default MoviesService;
