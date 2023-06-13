import LandingContainer from '@components/containers/landingContainer/LandingContainer';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import { ThemeContext } from '@context/ThemeContext';
import { TranslationContext } from '@context/TranslationContext';
import { LanguageEnum } from '@graphql/__generated__/graphql-type';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { Box, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '@theme/globalTheme';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import loadCatalog from './i18n';
import MainRouter from './router/MainRouter';
import useStyles from './style';
import { DarkModeEnum, RoutesEnum } from './types/enums';

const App = () => {
	const { themeMode } = useContext(ThemeContext);
	const styles = useStyles();
	const { pathname } = useLocation();
	const { currentLocale } = useContext(TranslationContext);

	useEffect(() => {
		loadCatalog(currentLocale);
	}, [currentLocale]);

	useEffect(() => {
		loadCatalog(LanguageEnum.En);
	}, []);

	return (
		<I18nProvider i18n={i18n}>
			<ThemeProvider
				theme={
					themeMode && themeMode === DarkModeEnum.DARK ? darkTheme : lightTheme
				}
			>
				<Box sx={styles.root(themeMode)}>
					{pathname !== RoutesEnum.ROOT && pathname !== RoutesEnum.HOME ? (
						<MainContainer>
							<MainRouter />
						</MainContainer>
					) : (
						<LandingContainer />
					)}
				</Box>
			</ThemeProvider>
		</I18nProvider>
	);
};

export default App;
