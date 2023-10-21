import { WatchQueryFetchPolicy } from '@apollo/client';
import { TranslationContext } from '@context/TranslationContext';
import {
	PersonDetailsQuery,
	usePersonDetailsQuery,
} from '@graphql/__generated__/graphql-type';
import { useContext } from 'react';
import { LoadingAndErrorOnFetchType } from '../types/types/hook';

type UsePersonDetailsType = Pick<
	LoadingAndErrorOnFetchType,
	'loading' | 'error'
> & {
	data: PersonDetailsQuery | undefined;
};

const usePersonDetails = (
	personId: string,
	fetchPolicy: WatchQueryFetchPolicy = 'cache-and-network',
): UsePersonDetailsType => {
	const { currentLocale } = useContext(TranslationContext);

	const { loading, error, data } = usePersonDetailsQuery({
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

export default usePersonDetails;
