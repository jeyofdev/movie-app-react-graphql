import MainContainer from '@components/containers/mainContainer/MainContainer';
import { ThemeContext } from '@context/ThemeContext';
import { Box, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '@theme/globalTheme';
import { useContext } from 'react';
import MainRouter from './router/MainRouter';
import useStyles from './style';
import { DarkModeEnum } from './types/enums';

const App = () => {
	const { themeMode } = useContext(ThemeContext);
	const styles = useStyles();

	return (
		<ThemeProvider
			theme={
				themeMode && themeMode === DarkModeEnum.DARK ? darkTheme : lightTheme
			}
		>
			<Box sx={styles.root(themeMode)}>
				<MainContainer>
					<MainRouter />
				</MainContainer>
			</Box>
		</ThemeProvider>
	);
};

export default App;
