import { RESTDataSource } from '@apollo/datasource-rest';
import 'dotenv/config';
import {
	MoviesResponse,
	QuerySearchMoviesArgs,
} from '__generated__/resolvers-types';

class SearchService extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3/search/movie';

		if (!process.env.TMDB_API_KEY) {
			throw new Error(
				'The environment variable TMDB_API_KEY must be specified',
			);
		}
		this.apiKey = process.env.TMDB_API_KEY;
	}

	async searchMovie(args: QuerySearchMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}?api_key=${this.apiKey}&query=${args?.searchOptions?.query
				?.split(' ')
				.join('+')}&language=${args?.searchOptions?.language}&page=${
				args?.searchOptions?.page
			}`,
		);
	}
}

export default SearchService;
