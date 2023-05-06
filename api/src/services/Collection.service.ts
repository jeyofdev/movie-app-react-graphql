import { RESTDataSource } from '@apollo/datasource-rest';
import {
	MoviesKeywordsResponse,
	QueryMoviesByCollectionArgs,
} from '../__generated__/resolvers-types';
import 'dotenv/config';

class CollectionsService extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3/collection';

		if (!process.env.TMDB_API_KEY) {
			throw new Error(
				'The environment variable TMDB_API_KEY must be specified',
			);
		}
		this.apiKey = `api_key=${process.env.TMDB_API_KEY}`;
	}

	async findMoviesByCollection(
		args: QueryMoviesByCollectionArgs,
	): Promise<MoviesKeywordsResponse> {
		return this.get(
			`${this.baseURL}/${args.collectionId}?${this.apiKey}&language=${args?.options?.language}`,
		);
	}
}

export default CollectionsService;
