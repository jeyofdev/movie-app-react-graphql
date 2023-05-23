import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import { useMovieDetailsQuery } from '@graphql/__generated__/graphql-type';
import { Box, Typography, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const MovieDetails = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { movieId } = useParams();

	const { loading, error, data } = useMovieDetailsQuery({
		variables: { movieId: Number(movieId) },
	});

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
				<Typography variant='h2' sx={styles.title}>
					{data?.movieDetails?.title}
				</Typography>
			</MainContainer>
		</Box>
	);
};

export default MovieDetails;
