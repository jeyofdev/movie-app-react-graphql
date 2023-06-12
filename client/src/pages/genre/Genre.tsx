import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	Genre as GenreType,
	Movie,
	useDiscoverMoviesByGenreQuery,
	useGenresQuery,
} from '@graphql/__generated__/graphql-type';
import { Trans } from '@lingui/macro';
import { Box } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from './style';

const Genre = () => {
	const styles = useStyles();
	const location = useLocation();
	const { currentLocale } = useContext(TranslationContext);

	const [page, setPage] = useState(1);

	const { loading, error, data } = useDiscoverMoviesByGenreQuery({
		variables: {
			discoverOptions: {
				with_genres: Number(location?.state?.genreId),
				page,
				language: currentLocale,
			},
		},
		fetchPolicy: 'cache-and-network',
	});

	const {
		data: dataGenres,
		loading: loadingGenres,
		error: errorGenres,
	} = useGenresQuery({
		variables: {
			options: {
				language: currentLocale,
			},
		},
		fetchPolicy: 'no-cache',
	});

	const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading || loadingGenres) {
		return <LoaderContainer />;
	}

	if (error || errorGenres) {
		return (
			<AlertBase>
				<Trans>An error has occurred !!!</Trans>
			</AlertBase>
		);
	}

	return (
		<Box sx={styles.root}>
			<ListContainer
				list={data?.discoverMoviesByGenre?.results as Array<Movie>}
				title={firstLetterCapitalize(
					(dataGenres?.genres?.genres as Array<GenreType>).find(
						genre => genre.id === Number(location?.state?.genreId),
					)?.name as string,
				)}
				totalPages={data?.discoverMoviesByGenre?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
			/>
		</Box>
	);
};

export default Genre;
