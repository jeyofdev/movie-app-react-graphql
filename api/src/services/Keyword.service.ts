import { RESTDataSource } from '@apollo/datasource-rest';
import {
	KeywordMoviesResponse,
	QueryMoviesByKeywordArgs,
} from '__generated__/resolvers-types';
import 'dotenv/config';
import { formatUrlQuery } from '../utils/helpers';

class KeywordService extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3/keyword';

		if (!process.env.TMDB_API_KEY) {
			throw new Error(
				'The environment variable TMDB_API_KEY must be specified',
			);
		}
		this.apiKey = process.env.TMDB_API_KEY;
	}

	async findMoviesByKeyword(
		args: QueryMoviesByKeywordArgs,
	): Promise<KeywordMoviesResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.keywordId)}/movies`,
				{
					language: args?.options?.language,
				},
			),
		);
	}
}

export default KeywordService;
