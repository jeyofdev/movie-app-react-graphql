import { DarkModeEnum } from '../enums';

export type ThemeContextType = {
	themeMode: DarkModeEnum;
	handleThemeMode: () => void;
};
