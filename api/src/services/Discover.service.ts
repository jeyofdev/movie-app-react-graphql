import { RESTDataSource } from '@apollo/datasource-rest';
import 'dotenv/config';
import {
	MoviesResponse,
	QueryDiscoverMoviesByGenreArgs,
} from '__generated__/resolvers-types';
import { formatUrlQuery } from '../utils/helpers';

class DiscoverService extends RESTDataSource {
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
		args: QueryDiscoverMoviesByGenreArgs,
	): Promise<MoviesResponse> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, '', {
				language: args?.discoverOptions?.language,
				page: args?.discoverOptions?.page,
				region: args?.discoverOptions?.region,
				with_genres: args?.discoverOptions?.with_genres,
			}),
		);
	}
}

export default DiscoverService;
