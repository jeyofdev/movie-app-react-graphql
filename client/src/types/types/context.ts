import { LanguageEnum } from '@graphql/__generated__/graphql-type';
import { DarkModeEnum } from '../enums';

export type ThemeContextType = {
	themeMode: DarkModeEnum;
	handleThemeMode: () => void;
};

export type TranslationContextType = {
	currentLocale: LanguageEnum;
	handleLocale: (locale: LanguageEnum) => void;
};
