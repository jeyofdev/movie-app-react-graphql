import { DarkModeEnum, LocaleEnum } from '../enums';

export type ThemeContextType = {
	themeMode: DarkModeEnum;
	handleThemeMode: () => void;
};

export type TranslationContextType = {
	currentLocale: LocaleEnum;
	handleLocale: (locale: LocaleEnum) => void;
};
