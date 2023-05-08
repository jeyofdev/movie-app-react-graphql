import { RESTDataSource } from '@apollo/datasource-rest';
import {
	MoviesKeywordsResponse,
	QueryMoviesByCollectionArgs,
	QueryTranslationsByCollectionArgs,
} from '../__generated__/resolvers-types';
import 'dotenv/config';
import { formatUrlQuery } from '../utils/helpers';

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
		this.apiKey = process.env.TMDB_API_KEY;
	}

	async findMoviesByCollection(
		args: QueryMoviesByCollectionArgs,
	): Promise<MoviesKeywordsResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.collectionId)}`,
				{
					language: args?.options?.language,
				},
			),
		);
	}

	async findTranslationsByCollection(
		args: QueryTranslationsByCollectionArgs,
	): Promise<MoviesKeywordsResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.collectionId)}/translations`,
				{
					language: args?.options?.language,
				},
			),
		);
	}
}

export default CollectionsService;
