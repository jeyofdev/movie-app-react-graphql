import LandingContainer from '@components/containers/landingContainer/LandingContainer';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import useTheme from '@hooks/useTheme';
import useTranslation from '@hooks/useTranslation';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { Box, ThemeProvider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import MainRouter from './router/MainRouter';
import useStyles from './style';
import { RoutesEnum } from './types/enums';

const App = () => {
	const styles = useStyles();
	const { pathname } = useLocation();
	const { themeMode, theme } = useTheme();
	useTranslation();

	return (
		<I18nProvider i18n={i18n}>
			<ThemeProvider theme={theme}>
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
