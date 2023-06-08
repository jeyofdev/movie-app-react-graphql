import MainContainer from '@components/containers/mainContainer/MainContainer';
import { ThemeContext } from '@context/ThemeContext';
import { TranslationContext } from '@context/TranslationContext';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { Box, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '@theme/globalTheme';
import { useContext, useEffect } from 'react';
import loadCatalog from './i18n';
import MainRouter from './router/MainRouter';
import useStyles from './style';
import { DarkModeEnum } from './types/enums';

const App = () => {
	const { themeMode } = useContext(ThemeContext);
	const styles = useStyles();
	const { currentLocale } = useContext(TranslationContext);

	useEffect(() => {
		loadCatalog(currentLocale);
	}, [currentLocale]);

	useEffect(() => {
		loadCatalog('en');
	}, []);

	return (
		<I18nProvider i18n={i18n}>
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
		</I18nProvider>
	);
};

export default App;
