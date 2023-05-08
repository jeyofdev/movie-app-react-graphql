import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { IContext } from '../../context';
import getServer from '../../config/server';
import 'dotenv/config';
import { executeRequestForTesting } from '../../utils/helpers';
import moviesQueryOperations from '../../operations/movie.query.operations';

describe('init server', () => {
	let server: ApolloServer<IContext>;
	let url: string;

	beforeAll(async () => {
		if (!process.env.TEST_API_PORT) {
			throw new Error(
				'The environment variable TEST_API_PORT must be specified',
			);
		}
		({ server, url } = await getServer(Number(process.env.TEST_API_PORT)));

		// eslint-disable-next-line no-console
		console.log(url);
	});

	afterAll(async () => {
		await server.stop();
	});

	describe('query MovieDetails', () => {
		it('when no movie matches', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.details,
				{
					movieId: 3445500,
					options: {
						language: 'EN',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.movieDetails).toBeNull();
		});

		it('when a movie matches', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.details,
				{
					movieId: 76600,
					options: {
						language: 'EN',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.movieDetails).toMatchSnapshot();
		});
	});
});
