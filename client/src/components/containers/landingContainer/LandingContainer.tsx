import Topbar from '@components/topbar/Topbar';
import { ThemeContext } from '@context/ThemeContext';
import { Box, Divider, useTheme } from '@mui/material';
import { useContext } from 'react';
import { MainContainerPropsType } from '../../../types/types/props';
import useStyles from './style';

const LandingContainer = ({ children }: MainContainerPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { themeMode } = useContext(ThemeContext);

	return (
		<Box sx={styles.root}>
			<Box sx={styles.contentBox}>
				<Topbar landing />
				<Divider sx={styles.divider(themeMode)} />
				<Box sx={styles.mainContentBox}>{children}</Box>
			</Box>
		</Box>
	);
};

export default LandingContainer;
