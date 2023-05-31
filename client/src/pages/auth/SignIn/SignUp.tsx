import { Box, Typography, useTheme } from '@mui/material';
import useStyles from './style';

const SignUp = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Typography variant='h2' sx={styles.title}>
				Register
			</Typography>
		</Box>
	);
};

export default SignUp;
