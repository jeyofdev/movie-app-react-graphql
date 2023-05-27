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
		it('When no result found', async () => {
			const response = await executeRequestForTesting(
				url,
				searchMoviesQueryOperations.searchMovies,
				{
					searchOptions: {
						query: 'tutuy',
						language: 'FR',
						page: 1,
						region: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.searchMovies).toMatchSnapshot();
		});

		it('Returns the list of movies sort', async () => {
			const response = await executeRequestForTesting(
				url,
				searchMoviesQueryOperations.searchMovies,
				{
					searchOptions: {
						query: 'star wars',
						language: 'FR',
						page: 1,
						region: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.searchMovies).toMatchSnapshot();
		});
	});
});
