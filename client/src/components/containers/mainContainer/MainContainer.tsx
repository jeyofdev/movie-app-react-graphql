import { Box, useTheme } from '@mui/material';
import { MainContainerPropsType } from '../../../types/types/props';
import useStyles from './style';

const MainContainer = ({ children }: MainContainerPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	return <Box sx={styles.root}>{children}</Box>;
};

export default MainContainer;
