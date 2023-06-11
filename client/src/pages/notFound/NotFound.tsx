import { Trans } from '@lingui/macro';
import { Box, Typography, useTheme } from '@mui/material';
import useStyles from './style';

const NotFound = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	return (
		<Box sx={styles.root}>
			<Typography variant='h3' sx={styles.typo}>
				<Trans>Page Not Found...</Trans>
			</Typography>
		</Box>
	);
};

export default NotFound;
