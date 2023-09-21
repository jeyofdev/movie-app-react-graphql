import { LanguageEnum, RegionEnum } from '@graphql/__generated__/graphql-type';
import { DarkModeEnum } from '../enums';

export type ThemeContextType = {
	themeMode: DarkModeEnum;
	handleThemeMode: () => void;
};

export type TranslationContextType = {
	currentLocale: LanguageEnum;
	currentRegion: RegionEnum;
	handleLocale: (locale: LanguageEnum) => void;
};
