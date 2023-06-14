import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { IContext } from '../../context';
import getServer from '../../config/server';
import 'dotenv/config';
import { executeRequestForTesting } from '../../utils/helpers';
import searchMoviesQueryOperations from '../../operations/search.query.operations';

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

	describe('Queries search', () => {
		it('When the search returns no result', async () => {
			const response = await executeRequestForTesting(
				url,
				searchMoviesQueryOperations.searchMovies,
				{
					searchOptions: {
						query: 'tutuy',
						language: 'fr',
						page: 1,
						region: 'fr',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.searchMovies).toMatchSnapshot();
		});

		it('Returns the result of search', async () => {
			const response = await executeRequestForTesting(
				url,
				searchMoviesQueryOperations.searchMovies,
				{
					searchOptions: {
						query: 'star wars',
						language: 'fr',
						page: 1,
						region: 'fr',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.searchMovies).toMatchSnapshot();
		});
	});
});
