import { WatchQueryFetchPolicy } from '@apollo/client';
import { TranslationContext } from '@context/TranslationContext';
import {
	useSearchMoviesQuery,
	SearchMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import {
	ChangeEvent,
	Dispatch,
	KeyboardEvent,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingAndErrorOnFetchType } from '../types/types/hook';
import { BreakpointEnum, RoutesEnum } from '../types/enums';
import useWindowSize from './useWindowSize';

type UseSearchMovieType = Pick<
	LoadingAndErrorOnFetchType,
	'loading' | 'error'
> & {
	data: SearchMoviesQuery | undefined;
	search: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onClick: () => void;
	onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const useSearchMovie = (
	setShowSearchBtnMobile?: Dispatch<SetStateAction<boolean>>,
	setShowInputSearch?: Dispatch<SetStateAction<boolean>>,
	fetchPolicy: WatchQueryFetchPolicy = 'cache-and-network',
): UseSearchMovieType => {
	const { width } = useWindowSize();
	const { currentLocale } = useContext(TranslationContext);
	const params = useParams();
	const navigate = useNavigate();

	const [search, setSearch] = useState<string>('');

	const { loading, error, data } = useSearchMoviesQuery({
		variables: {
			searchOptions: {
				query: params?.search?.split(' ').join('+'),
				language: currentLocale,
			},
		},
		fetchPolicy,
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (setSearch) {
			setSearch(e.target.value);
		}
	};

	const onClick = () => {
		navigate(`${RoutesEnum.SEARCH}/${search.split(' ').join('-')}`);
		setSearch('');

		if (width < BreakpointEnum.SM) {
			if (setShowSearchBtnMobile && setShowInputSearch) {
				setShowSearchBtnMobile(true);
				setShowInputSearch(false);
			}
		}
	};

	const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter' && search.length > 0) {
			onClick();
		}
	};

	useEffect(() => {}, []);

	return { loading, error, data, search, onChange, onClick, onKeyUp };
};

export default useSearchMovie;
