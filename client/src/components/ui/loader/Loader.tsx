import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import useStyles from './style';

const Loader = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	useLingui();
	return (
		<Box sx={styles.loaderBox}>
			<CircularProgress sx={styles.loader} />
			<Typography variant='h5' sx={styles.typo}>
				{t`Loading...`}
			</Typography>
		</Box>
	);
};

export default Loader;
