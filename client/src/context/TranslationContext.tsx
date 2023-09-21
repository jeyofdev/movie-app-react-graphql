import { LanguageEnum, RegionEnum } from '@graphql/__generated__/graphql-type';
import { createContext, useState } from 'react';
import { TranslationContextType } from '../types/types/context';
import { ThemeContextProviderPropsType } from '../types/types/props';

export const TranslationContext = createContext<TranslationContextType>({
	currentLocale: LanguageEnum.En,
	currentRegion: RegionEnum.En,
	handleLocale: () => {},
});

const TranslationContextProvider = ({
	children,
}: ThemeContextProviderPropsType) => {
	const [currentLocale, setCurrentLocale] = useState<LanguageEnum>(
		(localStorage.getItem('locale') as LanguageEnum) ?? LanguageEnum.En,
	);

	const setRegionValue = (locale: LanguageEnum) => {
		switch (locale) {
			case LanguageEnum.En:
				return RegionEnum.En;
			case LanguageEnum.Fr:
				return RegionEnum.Fr;
			case LanguageEnum.De:
				return RegionEnum.De;
			case LanguageEnum.Es:
				return RegionEnum.Es;

			default:
				return RegionEnum.En;
		}
	};

	const [currentRegion, setCurrentRegion] = useState<RegionEnum>(
		setRegionValue(
			(localStorage.getItem('locale') as LanguageEnum) ?? LanguageEnum.En,
		),
	);

	const handleLocale = (locale: LanguageEnum) => {
		setCurrentLocale(locale);
		setCurrentRegion(setRegionValue(locale));
	};

	return (
		<TranslationContext.Provider
			value={{ currentLocale, currentRegion, handleLocale }}
		>
			{children}
		</TranslationContext.Provider>
	);
};

export default TranslationContextProvider;
