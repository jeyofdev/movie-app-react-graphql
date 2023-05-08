import getServer from './config/server';
import 'dotenv/config';

const runServer = async () => {
	const { API_PORT } = process.env;

	if (!API_PORT) {
		throw new Error('The environment variable API_PORT must be specified');
	}

	const { url } = await getServer(Number(API_PORT));

	// eslint-disable-next-line no-console
	console.log(`🚀  Server ready at: ${url}`);
};

runServer();
