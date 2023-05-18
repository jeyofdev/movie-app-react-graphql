import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import { Box, Typography, useTheme } from '@mui/material';
import useStyles from './style';

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
