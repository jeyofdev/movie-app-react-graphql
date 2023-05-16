import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import MainSwiper from '@components/swiper/MainSwiper';
import { ThemeContext } from '@context/ThemeContext';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './style';

const Home = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { handleThemeMode } = useContext(ThemeContext);

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

					<Box sx={styles.sectionBox}>
						<Typography variant='h4' sx={styles.sectionTitle}>
							Popular movies
						</Typography>
						<Link to='/' style={styles.link}>
							<Typography>See all</Typography>
						</Link>
					</Box>
					<MainSwiper />
				</Box>
			</MainContainer>
		</Box>
	);
};

export default Home;
