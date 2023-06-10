import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	Movie,
	useTopRatedMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { getListMoviesTitle } from '@utils/index';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from './style';

const TopRated = () => {
	const styles = useStyles();
	const { pathname } = useLocation();
	const { currentLocale } = useContext(TranslationContext);

	const [page, setPage] = useState(1);

	const { loading, error, data } = useTopRatedMoviesQuery({
		variables: {
			options: {
				page,
				language: currentLocale,
			},
		},
		fetchPolicy: 'cache-and-network',
	});

	const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading) {
		return <LoaderContainer />;
	}

	if (error) {
		<AlertBase>An error has occurred !!!</AlertBase>;
	}

	return (
		<Box sx={styles.root}>
			<ListContainer
				list={data?.topRatedMovies?.results as Array<Movie>}
				totalPages={data?.topRatedMovies?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
				title={getListMoviesTitle(pathname)}
			/>
		</Box>
	);
};

export default TopRated;
