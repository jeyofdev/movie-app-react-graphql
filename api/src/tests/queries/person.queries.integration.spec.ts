import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { IContext } from '../../context';
import getServer from '../../config/server';
import 'dotenv/config';
import { executeRequestForTesting } from '../../utils/helpers';
import personsQueryOperations from '../../operations/person.query.operations';

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

	describe('Queries persons', () => {
		it('When no person found', async () => {
			const response = await executeRequestForTesting(
				url,
				personsQueryOperations.details,
				{
					collectionId: 30000000,
					options: {
						language: 'en',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.personDetails).toBeNull();
		});

		it("Returns a person's information", async () => {
			const response = await executeRequestForTesting(
				url,
				personsQueryOperations.details,
				{
					personId: 2,
					options: {
						language: 'fr',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.personDetails).toMatchSnapshot();
		});

		it("returns a person's information as an actor for each movie they starred in", async () => {
			const response = await executeRequestForTesting(
				url,
				personsQueryOperations.castByMovie,
				{
					personId: 2,
					options: {
						language: 'fr',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.personCastByMovie).toMatchSnapshot();
		});

		it('returns the information of a person who has a role in the technical team', async () => {
			const response = await executeRequestForTesting(
				url,
				personsQueryOperations.crewByMovie,
				{
					personId: 2,
					options: {
						language: 'en',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.personCrewByMovie).toMatchSnapshot();
		});

		it('returns the movies of a cast person', async () => {
			const response = await executeRequestForTesting(
				url,
				personsQueryOperations.moviesByCastPerson,
				{
					personId: 6384,
					options: {
						language: 'fr',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.moviesByCastPerson).toMatchSnapshot();
		});
	});
});
