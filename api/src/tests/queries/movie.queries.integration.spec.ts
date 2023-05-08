import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { IContext } from '../../context';
import getServer from '../../config/server';
import 'dotenv/config';

describe('init server', () => {
	let server: ApolloServer<IContext>;
	let url: string;

	beforeAll(async () => {
		if (!process.env.TEST_PORT) {
			throw new Error('The environment variable TEST_PORT must be specified');
		}
		({ server, url } = await getServer(Number(process.env.TEST_PORT)));

		// eslint-disable-next-line no-console
		console.log(url);
	});

	afterAll(async () => {
		await server.stop();
	});

	describe('check test id ok', () => {
		it('simple calcul', () => {
			expect(1 + 1).toEqual(2);
		});
	});
});
