import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import {
	Movie,
	useTopRatedMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from './style';

const TopRated = () => {
	const styles = useStyles();
	const location = useLocation();

	const [page, setPage] = useState(1);

	const { loading, error, data } = useTopRatedMoviesQuery({
		variables: {
			options: {
				page,
			},
		},
	});

	const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const getTitle = (): string => {
		const splitUrl = location.pathname.split('/');
		return splitUrl[splitUrl.length - 1].replaceAll('-', ' ');
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading) {
		return <LoaderContainer />;
	}

	if (error) {
		return <Box>{error?.message}</Box>;
	}

	return (
		<Box sx={styles.root}>
			<ListContainer
				list={data?.topRatedMovies?.results as Array<Movie>}
				totalPages={data?.topRatedMovies?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
				title={firstLetterCapitalize(getTitle())}
			/>
		</Box>
	);
};

export default TopRated;
