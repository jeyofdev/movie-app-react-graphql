import getServer from './config/server';
import 'dotenv/config';

const runServer = async () => {
	const { PORT } = process.env;

	if (!PORT) {
		throw new Error('The environment variable PORT must be specified');
	}

	const { url } = await getServer(Number(PORT));

	// eslint-disable-next-line no-console
	console.log(`🚀  Server ready at: ${url}`);
};

runServer();
