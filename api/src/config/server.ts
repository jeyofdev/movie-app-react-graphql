import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { IContext, context } from '../context';
import resolvers from '../resolvers';

const getServer = async (port?: number) => {
	const typeDefs = readFileSync('./src/schema/schema.graphql', {
		encoding: 'utf-8',
	});

	const server = new ApolloServer<IContext>({
		typeDefs,
		resolvers,
	});

	const { url } = await startStandaloneServer(server, {
		context: async () => context,
		listen: { port },
	});

	return { server, url };
};

export default getServer;
