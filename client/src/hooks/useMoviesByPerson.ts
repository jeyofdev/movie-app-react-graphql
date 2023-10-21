import { ApolloError, WatchQueryFetchPolicy } from '@apollo/client';
import { TranslationContext } from '@context/TranslationContext';
import {
	MoviesByCastPersonQuery,
	useMoviesByCastPersonQuery,
} from '@graphql/__generated__/graphql-type';
import { useContext } from 'react';

type UseMoviesByPersonType = {
	loading: boolean;
	error: ApolloError | undefined;
	data: MoviesByCastPersonQuery | undefined;
};

const useMoviesByPerson = (
	personId: string,
	fetchPolicy: WatchQueryFetchPolicy = 'cache-and-network',
): UseMoviesByPersonType => {
	const { currentLocale } = useContext(TranslationContext);

	const { loading, error, data } = useMoviesByCastPersonQuery({
		variables: {
			personId: Number(personId),
			options: {
				language: currentLocale,
			},
		},
		fetchPolicy,
	});

	return { loading, error, data };
};

export default useMoviesByPerson;
