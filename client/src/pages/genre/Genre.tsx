import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	Movie,
	useDiscoverMoviesByGenreQuery,
} from '@graphql/__generated__/graphql-type';
import { Trans, t } from '@lingui/macro';
import { Box } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useStyles from './style';

const Genre = () => {
	const styles = useStyles();
	const location = useLocation();
	const { genreName } = useParams();
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

	const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading) {
		return <LoaderContainer />;
	}

	if (error) {
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
				title={t`${firstLetterCapitalize(
					genreName?.replaceAll('-', ' ') as string,
				)}`}
				totalPages={data?.discoverMoviesByGenre?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
			/>
		</Box>
	);
};

export default Genre;
