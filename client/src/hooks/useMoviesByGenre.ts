import { WatchQueryFetchPolicy } from '@apollo/client';
import {
	DiscoverMoviesByGenreQuery,
	useDiscoverMoviesByGenreQuery,
} from '@graphql/__generated__/graphql-type';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { TranslationContext } from '@context/TranslationContext';
import { LoadingAndErrorOnFetchType } from '../types/types/hook';

type UseMoviesByGenreType = Pick<
	LoadingAndErrorOnFetchType,
	'loading' | 'error'
> & {
	data: DiscoverMoviesByGenreQuery | undefined;
};

const useMoviesByGenre = (
	page: number,
	fetchPolicy: WatchQueryFetchPolicy = 'cache-and-network',
): UseMoviesByGenreType => {
	const location = useLocation();
	const { currentLocale } = useContext(TranslationContext);

	const { loading, error, data } = useDiscoverMoviesByGenreQuery({
		variables: {
			discoverOptions: {
				with_genres: Number(location?.state?.genreId),
				page,
				language: currentLocale,
			},
		},
		fetchPolicy,
	});

	return { loading, error, data };
};

export default useMoviesByGenre;
