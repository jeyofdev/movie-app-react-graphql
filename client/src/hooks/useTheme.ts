import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import { darkTheme, lightTheme } from '@theme/globalTheme';
import { Theme } from '@mui/material';
import { DarkModeEnum } from '../types/enums';

type UseThemeType = {
	themeMode: DarkModeEnum;
	theme: Theme;
};

const useTheme = (): UseThemeType => {
	const { themeMode } = useContext(ThemeContext);
	const [theme, setTheme] = useState<Theme>(darkTheme);

	useEffect(() => {
		setTheme(
			themeMode && themeMode === DarkModeEnum.DARK ? darkTheme : lightTheme,
		);
	}, [themeMode]);

	return {
		themeMode,
		theme,
	};
};

export default useTheme;
