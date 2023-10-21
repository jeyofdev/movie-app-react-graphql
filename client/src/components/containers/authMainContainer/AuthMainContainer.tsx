import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import { AuthMainContainerPropsType } from '../../../types/types/props';
import useStyles from './style';

const AuthMainContainer = ({ children }: AuthMainContainerPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return <Box sx={styles.root}>{children}</Box>;
};

export default AuthMainContainer;
