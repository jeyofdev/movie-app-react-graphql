import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import { ThemeContext } from '@context/ThemeContext';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import useStyles from './style';

const Popular = () => {
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

					<Typography variant='h5' sx={styles.title}>
						Popular movies
					</Typography>
				</Box>
			</MainContainer>
		</Box>
	);
};

export default Popular;
