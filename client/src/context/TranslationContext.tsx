import { createContext, useState } from 'react';
import { LocaleEnum } from '../types/enums';
import { TranslationContextType } from '../types/types/context';
import { ThemeContextProviderPropsType } from '../types/types/props';

export const TranslationContext = createContext<TranslationContextType>({
	currentLocale: LocaleEnum.EN,
	handleLocale: () => {},
});

const TranslationContextProvider = ({
	children,
}: ThemeContextProviderPropsType) => {
	const [currentLocale, setcurrentLocale] = useState(LocaleEnum.EN);

	const handleLocale = (locale: LocaleEnum) => {
		setcurrentLocale(locale);
	};

	return (
		<TranslationContext.Provider value={{ currentLocale, handleLocale }}>
			{children}
		</TranslationContext.Provider>
	);
};

export default TranslationContextProvider;
