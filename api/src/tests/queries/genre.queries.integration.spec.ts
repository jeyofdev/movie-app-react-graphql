import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { IContext } from '../../context';
import getServer from '../../config/server';
import 'dotenv/config';
import { executeRequestForTesting } from '../../utils/helpers';
import genresQueryOperations from '../../operations/genre.query.operations';

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

	describe('Queries genre', () => {
		it('Returns the list of movies to a keyword', async () => {
			const response = await executeRequestForTesting(
				url,
				genresQueryOperations.genres,
				{},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.genres).toMatchSnapshot();
		});
	});
});
