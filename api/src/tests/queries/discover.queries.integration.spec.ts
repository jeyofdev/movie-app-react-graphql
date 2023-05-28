import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { IContext } from '../../context';
import getServer from '../../config/server';
import 'dotenv/config';
import { executeRequestForTesting } from '../../utils/helpers';
import discoverMoviesQueryOperations from '../../operations/discover.query.operations';

describe('init server', () => {
	let server: ApolloServer<IContext>;
	let url: string;

	beforeAll(async () => {
		if (!process.env.TEST_API_PORT) {
			throw new Error(
				'The environment variable TEST_API_PORT must be specified',
			);
		}
		({ server, url } = await getServer());
	});

	afterAll(async () => {
		await server.stop();
	});

	describe('Queries discover', () => {
		it('Returns the list of movies sort by date asc', async () => {
			const response = await executeRequestForTesting(
				url,
				discoverMoviesQueryOperations.sortMovies,
				{
					discoverOptions: {
						language: 'FR',
						page: 2,
						sort_by: 'PRIMARY_RELEASE_DATE_ASC',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.sortMovies).toMatchSnapshot();
		});
	});

	it('Returns the list of movies sort by popularity desc', async () => {
		const response = await executeRequestForTesting(
			url,
			discoverMoviesQueryOperations.sortMovies,
			{
				discoverOptions: {
					language: 'FR',
					page: 2,
					sort_by: 'POPULARITY_DESC',
				},
			},
		);

		expect(response.error).not.toBeUndefined();
		expect(response.body.data.sortMovies).toMatchSnapshot();
	});
});
