import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import { Box, Theme, Typography, useTheme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundColor: theme.palette.background.default,
		padding: `0 ${theme.spacing(2)}`,
	},
});

const ComingSoon = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<MainContainer>
				<Sidebar />
				<Typography variant='h1' color='primary'>
					comingSoon
				</Typography>
			</MainContainer>
		</Box>
	);
};

export default ComingSoon;
