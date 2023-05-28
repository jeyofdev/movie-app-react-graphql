import Sidebar from '@components/sidebar/sidebar/Sidebar';
import Topbar from '@components/topbar/Topbar';
import { ThemeContext } from '@context/ThemeContext';
import { Box, Divider, useTheme } from '@mui/material';
import { useContext } from 'react';
import { MainContainerPropsType } from '../../../types/types/props';
import useStyles from './style';

const MainContainer = ({ children }: MainContainerPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { themeMode } = useContext(ThemeContext);

	return (
		<Box sx={styles.root}>
			<Sidebar />
			<Box sx={styles.contentBox}>
				<Topbar />
				<Divider sx={styles.divider(themeMode)} />
				{children}
			</Box>
		</Box>
	);
};

export default MainContainer;
