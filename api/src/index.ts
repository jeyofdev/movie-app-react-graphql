import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './resolvers';
import 'dotenv/config';
import { IContext, context } from './context';

const runServer = async () => {
	const { PORT } = process.env;

	if (!PORT) {
		throw new Error('The environment variable PORT must be specified');
	}

	const typeDefs = readFileSync('./src/schema/schema.graphql', {
		encoding: 'utf-8',
	});

	const server = new ApolloServer<IContext>({
		typeDefs,
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		context: async () => context,
		listen: { port: Number(PORT) },
	});

	// eslint-disable-next-line no-console
	console.log(`🚀  Server ready at: ${url}`);
};

runServer();
