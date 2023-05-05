import { RESTDataSource } from '@apollo/datasource-rest';
import { MoviesKeywordsResponse } from '__generated__/resolvers-types';
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
		collectionId: number,
	): Promise<MoviesKeywordsResponse> {
		return this.get(`${this.baseURL}/${collectionId}?${this.apiKey}`);
	}
}

export default CollectionsService;
