import { WatchQueryFetchPolicy } from '@apollo/client';
import { TranslationContext } from '@context/TranslationContext';
import {
	MovieDetailsQuery,
	useMovieDetailsQuery,
} from '@graphql/__generated__/graphql-type';
import { useContext } from 'react';
import { LoadingAndErrorOnFetchType } from '../types/types/hook';

type UseMovieDetailsType = Pick<
	LoadingAndErrorOnFetchType,
	'loading' | 'error'
> & {
	data: MovieDetailsQuery | undefined;
};

const useMovieDetails = (
	movieId: string,
	fetchPolicy: WatchQueryFetchPolicy = 'cache-and-network',
): UseMovieDetailsType => {
	const { currentLocale } = useContext(TranslationContext);

	const { loading, error, data } = useMovieDetailsQuery({
		variables: {
			movieId: Number(movieId),
			options: { language: currentLocale },
		},
		fetchPolicy,
	});

	return { loading, error, data };
};

export default useMovieDetails;
