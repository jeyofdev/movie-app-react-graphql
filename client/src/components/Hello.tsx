/* eslint-disable no-console */
import { usePopularMoviesQuery } from '../graphql/__generated__/graphql-type';

const Hello = () => {
	const { data, loading, error } = usePopularMoviesQuery({});

	console.log(data, loading, error);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>error.message...</p>;
	}

	return <h1>Hello</h1>;
};

export default Hello;
