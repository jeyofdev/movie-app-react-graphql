import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { IContext } from '../../context';
import getServer from '../../config/server';
import 'dotenv/config';
import { executeRequestForTesting } from '../../utils/helpers';
import keywordsQueryOperations from '../../operations/keyword.query.operations';

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

	describe('Queries collections', () => {
		it('When no keyword found', async () => {
			const response = await executeRequestForTesting(
				url,
				keywordsQueryOperations.moviesByKeyword,
				{
					keywordId: 755,
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.moviesByKeyword).toBeNull();
		});

		it('Returns the list of movies in a collection', async () => {
			const response = await executeRequestForTesting(
				url,
				keywordsQueryOperations.moviesByKeyword,
				{
					keywordId: 161176,
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.moviesByKeyword).toMatchSnapshot();
		});
	});
});
