import { RESTDataSource } from '@apollo/datasource-rest';
import { Person } from '__generated__/resolvers-types';
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
}

export default PersonsService;
