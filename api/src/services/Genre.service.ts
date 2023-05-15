import { RESTDataSource } from '@apollo/datasource-rest';
import {
	GenreResponses,
	QueryGenresArgs,
} from '../__generated__/resolvers-types';
import 'dotenv/config';
import { formatUrlQuery } from '../utils/helpers';

class GenreService extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3/genre/movie';

		if (!process.env.TMDB_API_KEY) {
			throw new Error(
				'The environment variable TMDB_API_KEY must be specified',
			);
		}
		this.apiKey = process.env.TMDB_API_KEY;
	}

	async findGenres(args: QueryGenresArgs): Promise<GenreResponses> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, 'list', {
				language: args?.options?.language,
			}),
		);
	}
}

export default GenreService;
