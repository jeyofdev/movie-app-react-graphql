import { RESTDataSource } from '@apollo/datasource-rest';
import 'dotenv/config';
import {
	MoviesResponse,
	QuerySearchMoviesArgs,
} from '__generated__/resolvers-types';
import { formatUrlQuery } from '../utils/helpers';

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

	async searchMovies(args: QuerySearchMoviesArgs): Promise<MoviesResponse> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, '', {
				language: args?.searchOptions?.language,
				page: args?.searchOptions?.page,
				region: args?.searchOptions?.region,
				query: args?.searchOptions?.query?.split(' ').join('+'),
			}),
		);
	}
}

export default SearchService;
