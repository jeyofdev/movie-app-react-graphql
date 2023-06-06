import Loader from '@components/ui/loader/Loader';
import { Box } from '@mui/material';
import useStyles from './style';

const LoaderContainer = () => {
	const styles = useStyles();

	return (
		<Box sx={styles.root}>
			<Loader />
		</Box>
	);
};

export default LoaderContainer;
