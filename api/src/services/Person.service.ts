import { RESTDataSource } from '@apollo/datasource-rest';
import {
	Person,
	PersonCastResponse,
	PersonCrewResponse,
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

	async findPersonDetails(personId: number): Promise<Person> {
		return this.get(`${this.baseURL}/${personId}?${this.apiKey}`);
	}

	async findCrewByPerson(personId: number): Promise<PersonCrewResponse> {
		return this.get(`${this.baseURL}/${personId}/movie_credits?${this.apiKey}`);
	}

	async findCastByPerson(personId: number): Promise<PersonCastResponse> {
		return this.get(`${this.baseURL}/${personId}/movie_credits?${this.apiKey}`);
	}
}

export default PersonsService;
