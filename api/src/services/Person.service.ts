import { RESTDataSource } from '@apollo/datasource-rest';
import {
	MoviesByCastPersonResponse,
	Person,
	PersonCastResponse,
	PersonCrewResponse,
	QueryMoviesByCastPersonArgs,
	QueryPersonCastByMovieArgs,
	QueryPersonCrewByMovieArgs,
	QueryPersonDetailsArgs,
} from '__generated__/resolvers-types';
import 'dotenv/config';
import { formatUrlQuery } from '../utils/helpers';

class PersonService extends RESTDataSource {
	baseURL!: string;
	apiKey!: string;

	constructor() {
		super();
		this.baseURL = 'https://api.themoviedb.org/3/person';

		if (!process.env.TMDB_API_KEY) {
			throw new Error(
				'The environment variable TMDB_API_KEY must be specified',
			);
		}
		this.apiKey = process.env.TMDB_API_KEY;
	}

	async findPersonDetails(args: QueryPersonDetailsArgs): Promise<Person> {
		return this.get(
			formatUrlQuery(this.baseURL, this.apiKey, `${String(args.personId)}`, {
				language: args?.options?.language,
			}),
		);
	}

	async findCrewByPerson(
		args: QueryPersonCrewByMovieArgs,
	): Promise<PersonCrewResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.personId)}/movie_credits`,
				{
					language: args?.options?.language,
				},
			),
		);
	}

	async findCastByPerson(
		args: QueryPersonCastByMovieArgs,
	): Promise<PersonCastResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.personId)}/movie_credits`,
				{
					language: args?.options?.language,
				},
			),
		);
	}

	async moviesByCastPerson(
		args: QueryMoviesByCastPersonArgs,
	): Promise<MoviesByCastPersonResponse> {
		return this.get(
			formatUrlQuery(
				this.baseURL,
				this.apiKey,
				`${String(args.personId)}/movie_credits`,
				{
					language: args?.options?.language,
				},
			),
		);
	}
}

export default PersonService;
