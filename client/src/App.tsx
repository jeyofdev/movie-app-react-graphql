import MainContainer from '@components/containers/mainContainer/MainContainer';
import { ThemeContext } from '@context/ThemeContext';
import { Box, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '@theme/globalTheme';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainRouter from './router/MainRouter';
import { DarkModeEnum } from './types/enums';

const App = () => {
	const { themeMode } = useContext(ThemeContext);
	const location = useLocation();

	return (
		<ThemeProvider
			theme={
				themeMode && themeMode === DarkModeEnum.DARK ? darkTheme : lightTheme
			}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '100vh',
					padding: { xs: 0, sm: '24px' },
				}}
			>
				{location.pathname !== '/login' && location.pathname !== '/register' ? (
					<MainContainer>
						<MainRouter />
					</MainContainer>
				) : (
					<MainRouter />
				)}
			</Box>
		</ThemeProvider>
	);
};

export default App;
