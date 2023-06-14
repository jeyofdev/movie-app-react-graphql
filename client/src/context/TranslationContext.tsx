import { LanguageEnum } from '@graphql/__generated__/graphql-type';
import { createContext, useState } from 'react';
import { TranslationContextType } from '../types/types/context';
import { ThemeContextProviderPropsType } from '../types/types/props';

export const TranslationContext = createContext<TranslationContextType>({
	currentLocale: LanguageEnum.En,
	handleLocale: () => {},
});

const TranslationContextProvider = ({
	children,
}: ThemeContextProviderPropsType) => {
	const [currentLocale, setcurrentLocale] = useState<LanguageEnum>(
		(localStorage.getItem('locale') as LanguageEnum) ?? LanguageEnum.En,
	);

	const handleLocale = (locale: LanguageEnum) => {
		setcurrentLocale(locale);
	};

	return (
		<TranslationContext.Provider value={{ currentLocale, handleLocale }}>
			{children}
		</TranslationContext.Provider>
	);
};

export default TranslationContextProvider;
