import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import { ThemeContext } from '@context/ThemeContext';
import { Box, Button, Theme, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';

const useStyles = (theme: Theme) => ({
	root: {
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundColor: theme.palette.background.default,
		padding: 0,

		[theme.breakpoints.up('sm')]: {
			padding: `${theme.spacing(3)}`,
		},
	},
});

const Home = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { handleThemeMode } = useContext(ThemeContext);

	return (
		<Box sx={styles.root}>
			<MainContainer>
				<Sidebar />
				<Box>
					<Button
						color='primary'
						onClick={() => {
							handleThemeMode();
						}}
					>
						darkmode
					</Button>
					<Typography variant='h1' color='primary'>
						Home
					</Typography>
				</Box>
			</MainContainer>
		</Box>
	);
};

export default Home;
