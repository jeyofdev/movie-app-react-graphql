import ListContainer from '@components/containers/listContainer/ListContainer';
import {
	Movie,
	useUpcomingMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from './style';

const Upcoming = () => {
	const styles = useStyles();
	const location = useLocation();

	const { loading, error, data } = useUpcomingMoviesQuery();

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
			/>
		</Box>
	);
};

export default Upcoming;
