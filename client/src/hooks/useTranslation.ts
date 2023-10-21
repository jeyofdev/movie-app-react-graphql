import { TranslationContext } from '@context/TranslationContext';
import { LanguageEnum } from '@graphql/__generated__/graphql-type';
import { useContext, useEffect } from 'react';
import loadCatalog from '../i18n';

const useTranslation = (): null => {
	const { currentLocale } = useContext(TranslationContext);

	useEffect(() => {
		loadCatalog(currentLocale);
	}, [currentLocale]);

	useEffect(() => {
		loadCatalog(localStorage.getItem('locale') ?? LanguageEnum.En);
	}, []);

	return null;
};

export default useTranslation;
