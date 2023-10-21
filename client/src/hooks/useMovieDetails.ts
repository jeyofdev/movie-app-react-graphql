import { ApolloError, WatchQueryFetchPolicy } from '@apollo/client';
import { TranslationContext } from '@context/TranslationContext';
import {
	MovieDetailsQuery,
	useMovieDetailsQuery,
} from '@graphql/__generated__/graphql-type';
import { useContext } from 'react';

type UseMovieDetailsType = {
	loading: boolean;
	error: ApolloError | undefined;
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
