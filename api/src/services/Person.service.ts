import { RESTDataSource } from '@apollo/datasource-rest';
import {
	Person,
	PersonCastResponse,
	PersonCrewResponse,
	QueryPersonCastByMovieArgs,
	QueryPersonCrewByMovieArgs,
	QueryPersonDetailsArgs,
} from '__generated__/resolvers-types';
import 'dotenv/config';

class PersonsService extends RESTDataSource {
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
		this.apiKey = `api_key=${process.env.TMDB_API_KEY}`;
	}

	async findPersonDetails(args: QueryPersonDetailsArgs): Promise<Person> {
		return this.get(
			`${this.baseURL}/${args.personId}?${this.apiKey}&language=${args?.options?.language}`,
		);
	}

	async findCrewByPerson(
		args: QueryPersonCrewByMovieArgs,
	): Promise<PersonCrewResponse> {
		return this.get(
			`${this.baseURL}/${args.personId}/movie_credits?${this.apiKey}&language=${args?.options?.language}`,
		);
	}

	async findCastByPerson(
		args: QueryPersonCastByMovieArgs,
	): Promise<PersonCastResponse> {
		return this.get(
			`${this.baseURL}/${args.personId}/movie_credits?${this.apiKey}&language=${args?.options?.language}`,
		);
	}
}

export default PersonsService;
