import { WatchQueryFetchPolicy } from '@apollo/client';
import { TranslationContext } from '@context/TranslationContext';
import {
	useSearchMoviesQuery,
	SearchMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingAndErrorOnFetchType } from '../types/types/hook';

type UseSearchMovieType = Pick<
	LoadingAndErrorOnFetchType,
	'loading' | 'error'
> & {
	data: SearchMoviesQuery | undefined;
};

const useSearchMovie = (
	fetchPolicy: WatchQueryFetchPolicy = 'cache-and-network',
): UseSearchMovieType => {
	const { currentLocale } = useContext(TranslationContext);
	const { search } = useParams();

	const { loading, error, data } = useSearchMoviesQuery({
		variables: {
			searchOptions: {
				query: search?.split(' ').join('+'),
				language: currentLocale,
			},
		},
		fetchPolicy,
	});

	return { loading, error, data };
};

export default useSearchMovie;
