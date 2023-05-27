import { ThemeContext } from '@context/ThemeContext';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, useTheme } from '@mui/material';
import { useContext } from 'react';
import { DarkModeEnum } from '../../types/enums';
import useStyles from './style';

const Topbar = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const { themeMode, handleThemeMode } = useContext(ThemeContext);

	return (
		<Box sx={styles.root}>
			<Button
				color='primary'
				onClick={() => {
					handleThemeMode();
				}}
				sx={styles.darkModeBtn}
			>
				<FontAwesomeIcon
					icon={themeMode === DarkModeEnum.DARK ? faMoon : faSun}
					color={theme.palette.primary.contrastText}
					style={styles.darkModeIcon}
				/>
			</Button>
		</Box>
	);
};

export default Topbar;
