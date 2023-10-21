import { ApolloError, WatchQueryFetchPolicy } from '@apollo/client';
import {
	CastByMovieQuery,
	useCastByMovieQuery,
} from '@graphql/__generated__/graphql-type';

type UseMovieCastType = {
	loading: boolean;
	error: ApolloError | undefined;
	data: CastByMovieQuery | undefined;
};

const useMovieCast = (
	movieId: string,
	fetchPolicy: WatchQueryFetchPolicy = 'cache-and-network',
): UseMovieCastType => {
	const { loading, error, data } = useCastByMovieQuery({
		variables: { movieId: Number(movieId) },
		fetchPolicy,
	});

	return { loading, error, data };
};

export default useMovieCast;
