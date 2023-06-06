import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import useStyles from './style';

const Loader = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.loaderBox}>
			<CircularProgress sx={styles.loader} />
			<Typography variant='h5' sx={styles.typo}>
				Loading...
			</Typography>
		</Box>
	);
};

export default Loader;
