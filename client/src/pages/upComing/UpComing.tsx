import ListContainer from '@components/containers/listContainer/ListContainer';
import {
	Movie,
	useUpcomingMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from './style';

const Upcoming = () => {
	const styles = useStyles();
	const location = useLocation();

	const [page, setPage] = useState(1);

	const { loading, error, data } = useUpcomingMoviesQuery({
		variables: {
			options: {
				page,
			},
		},
	});

	const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
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
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box>{error?.message}</Box>;
	}

	return (
		<Box sx={styles.root}>
			<ListContainer
				list={data?.upcomingMovies?.results as Array<Movie>}
				title={firstLetterCapitalize(getTitle())}
				totalPages={data?.upcomingMovies?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
			/>
		</Box>
	);
};

export default Upcoming;
