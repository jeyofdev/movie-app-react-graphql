import { Box, Typography } from '@mui/material';
import useStyles from './style';

const NotFound = () => {
	const styles = useStyles();
	return (
		<Box sx={styles.root}>
			<Typography variant='h3'>Page Not Found</Typography>
		</Box>
	);
};

export default NotFound;
