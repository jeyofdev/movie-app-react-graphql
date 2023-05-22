import ListContainer from '@components/containers/listContainer/ListContainer';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import {
	Movie,
	useTopRatedMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Box, useTheme } from '@mui/material';
import useStyles from './style';

const TopRated = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const { loading, error, data } = useTopRatedMoviesQuery();

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
				<ListContainer list={data?.topRatedMovies?.results as Array<Movie>} />
			</MainContainer>
		</Box>
	);
};

export default TopRated;
