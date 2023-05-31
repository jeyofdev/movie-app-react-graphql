import { Box, Typography, useTheme } from '@mui/material';
import useStyles from './style';

const Login = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Typography variant='h2' sx={styles.title}>
				Login
			</Typography>
		</Box>
	);
};

export default Login;
