/* eslint-disable no-console */
import { useQuery } from '@apollo/client';
import GET_POPULAR_MOVIES from '../graphql/queries';

const Hello = () => {
	const { data, loading, error } = useQuery(GET_POPULAR_MOVIES, {});

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
