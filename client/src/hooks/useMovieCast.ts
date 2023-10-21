import { WatchQueryFetchPolicy } from '@apollo/client';
import {
	CastByMovieQuery,
	useCastByMovieQuery,
} from '@graphql/__generated__/graphql-type';
import { LoadingAndErrorOnFetchType } from '../types/types/hook';

type UseMovieCastType = Pick<
	LoadingAndErrorOnFetchType,
	'loading' | 'error'
> & {
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
