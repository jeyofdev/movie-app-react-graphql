import { WatchQueryFetchPolicy } from '@apollo/client';
import {
	Genre,
	GenresQuery,
	useGenresQuery,
} from '@graphql/__generated__/graphql-type';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { TranslationContext } from '@context/TranslationContext';
import { LoadingAndErrorOnFetchType } from '../types/types/hook';

type UseGenreTitleType = Pick<
	LoadingAndErrorOnFetchType,
	'loading' | 'error'
> & {
	data: GenresQuery | undefined;
	getTitleGenre: () => string;
};

const useGenreTitle = (
	fetchPolicy: WatchQueryFetchPolicy = 'cache-and-network',
): UseGenreTitleType => {
	const location = useLocation();
	const { currentLocale } = useContext(TranslationContext);

	const { data, loading, error } = useGenresQuery({
		variables: {
			options: {
				language: currentLocale,
			},
		},
		fetchPolicy,
	});

	const getTitleGenre = (): string => {
		if (data?.genres?.genres) {
			const currentGenreById = (data?.genres?.genres as Array<Genre>).find(
				genre => genre.id === Number(location?.state?.genreId),
			)?.name as string;

			return currentGenreById;
		}

		return '';
	};

	return { loading, error, data, getTitleGenre };
};

export default useGenreTitle;
