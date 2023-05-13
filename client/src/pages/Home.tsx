import { ThemeContext } from '@context/ThemeContext';
import { Box, Button, Theme, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundColor: theme.palette.primary.dark,
	},
});

const Home = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { handleThemeMode } = useContext(ThemeContext);

	return (
		<Box sx={styles.root}>
			<>
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
			</>
		</Box>
	);
};

export default Home;
