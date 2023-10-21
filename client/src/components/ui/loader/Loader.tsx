import useTheme from '@hooks/useTheme';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { LoaderPropsType } from '../../../types/types/props';
import useStyles from './style';

const Loader = ({ color }: LoaderPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	useLingui();
	return (
		<Box sx={styles.loaderBox}>
			<CircularProgress sx={styles.loader(color)} />
			<Typography variant='h5' sx={styles.typo(color)}>
				{t`Loading...`}
			</Typography>
		</Box>
	);
};

export default Loader;
