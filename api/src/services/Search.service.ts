import { RESTDataSource } from '@apollo/datasource-rest';
import 'dotenv/config';
import {
	MoviesResponse,
	QuerySearchMoviesByGenreArgs,
} from '__generated__/resolvers-types';

class SearchService extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3/discover/movie';

		if (!process.env.TMDB_API_KEY) {
			throw new Error(
				'The environment variable TMDB_API_KEY must be specified',
			);
		}
		this.apiKey = process.env.TMDB_API_KEY;
	}

	async findMoviesByGenre(
		args: QuerySearchMoviesByGenreArgs,
	): Promise<MoviesResponse> {
		return this.get(
			`${this.baseURL}?api_key=${this.apiKey}&with_genres=${args?.searchOptions?.with_genres}&language=${args?.searchOptions?.language}&page=${args?.searchOptions?.page}`,
		);
	}
}

export default SearchService;
