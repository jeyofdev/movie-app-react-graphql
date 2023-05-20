import ListResultCard from '@components/cards/listResultCard/ListResultCard';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import { ThemeContext } from '@context/ThemeContext';
import { usePopularMoviesQuery } from '@graphql/__generated__/graphql-type';
import { Box, Button, useTheme } from '@mui/material';
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
					<Box sx={styles.darkMode}>
						<Button
							color='primary'
							onClick={() => {
								handleThemeMode();
							}}
						>
							darkmode
						</Button>
					</Box>

					<Box sx={styles.cards}>
						{data?.popularMovies?.results?.map(movie => (
							<ListResultCard
								key={movie?.id}
								id={movie?.id}
								poster_path={movie?.poster_path}
								title={movie?.title}
								vote_average={movie?.vote_average}
							/>
						))}
					</Box>
				</Box>
			</MainContainer>
		</Box>
	);
};

export default Popular;
