import Loader from '@components/ui/loader/Loader';
import { Box } from '@mui/material';
import { LoaderContainerPropsType } from '../../../types/types/props';
import useStyles from './style';

const LoaderContainer = ({ color }: LoaderContainerPropsType) => {
	const styles = useStyles();

	return (
		<Box sx={styles.root}>
			<Loader color={color} />
		</Box>
	);
};

export default LoaderContainer;
