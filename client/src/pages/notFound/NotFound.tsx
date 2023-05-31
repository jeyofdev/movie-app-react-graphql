import MainContainer from '@components/containers/mainContainer/MainContainer';
import { Box, Typography, useTheme } from '@mui/material';
import useStyles from './style';

const NotFound = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	return (
		<MainContainer>
			<Box sx={styles.root}>
				<Typography variant='h3' sx={styles.typo}>
					Page Not Found
				</Typography>
			</Box>
		</MainContainer>
	);
};

export default NotFound;
