import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import { ThemeContext } from '@context/ThemeContext';
import { usePopularMoviesQuery } from '@graphql/__generated__/graphql-type';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import useStyles from './style';

const Popular = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { handleThemeMode } = useContext(ThemeContext);

	const { loading, error, data } = usePopularMoviesQuery();

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
				<Box sx={styles.primaryContentBox}>
					<Box>
						<Button
							color='primary'
							onClick={() => {
								handleThemeMode();
							}}
						>
							darkmode
						</Button>
					</Box>

					{data?.popularMovies?.results?.map(movie => (
						<Typography key={movie?.id} variant='h5' sx={styles.title}>
							{movie?.title}
						</Typography>
					))}
				</Box>
			</MainContainer>
		</Box>
	);
};

export default Popular;
