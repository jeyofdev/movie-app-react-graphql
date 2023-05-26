import ListContainer from '@components/containers/listContainer/ListContainer';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import {
	Movie,
	useUpcomingMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Box, useTheme } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from './style';

const Upcoming = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
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
			<MainContainer>
				<Sidebar />
				<ListContainer
					list={data?.upcomingMovies?.results as Array<Movie>}
					title={firstLetterCapitalize(getTitle())}
				/>
			</MainContainer>
		</Box>
	);
};

export default Upcoming;
