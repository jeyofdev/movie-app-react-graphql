import Sidebar from '@components/sidebar/sidebar/Sidebar';
import Topbar from '@components/topbar/Topbar';
import { Box, Divider, useTheme } from '@mui/material';
import { MainContainerPropsType } from '../../../types/types/props';
import useStyles from './style';

const MainContainer = ({ children }: MainContainerPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	return (
		<Box sx={styles.root}>
			<Sidebar />
			<Box sx={styles.contentBox}>
				<Topbar />
				<Divider />
				{children}
			</Box>
		</Box>
	);
};

export default MainContainer;
