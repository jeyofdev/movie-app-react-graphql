import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { IContext } from '../../context';
import getServer from '../../config/server';
import 'dotenv/config';
import { executeRequestForTesting } from '../../utils/helpers';
import collectionsQueryOperations from '../../operations/collection.query.operations';

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
		it('Returns the list of movies in a collection', async () => {
			const response = await executeRequestForTesting(
				url,
				collectionsQueryOperations.moviesByCollection,
				{
					collectionId: 10,
					options: {
						language: 'EN',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.moviesByCollection).toMatchSnapshot();
		});

		it('returns the translations of a collection', async () => {
			const response = await executeRequestForTesting(
				url,
				collectionsQueryOperations.translationsByCollection,
				{
					collectionId: 10,
					options: {
						language: 'EN',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.translationsByCollection).toMatchSnapshot();
		});
	});
});
