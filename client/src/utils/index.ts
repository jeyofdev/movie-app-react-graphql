import { format } from 'date-fns';
import { enGB, fr, es, de } from 'date-fns/locale';
import { toast } from 'react-toastify';
import { LanguageEnum } from '@graphql/__generated__/graphql-type';
import { RoutesEnum } from '../types/enums';

/**
 * Limit text by number words
 * @param text
 * @param limit
 * @returns
 */
export const truncate = (text: string, limit: number): string => {
	const { length } = text.split(' ');

	return length <= limit
		? text
		: `${text.split(' ').slice(0, limit).join(' ')}...`;
};

/**
 * Format number to hours and minutes
 * @param totalMinutes
 * @returns
 */
export const formatNumberToHours = (totalMinutes: number): string => {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	if (minutes === 0) {
		return `${hours}h`;
	}

	if (minutes < 10) {
		return `${hours}h ${`0${minutes}`}min`;
	}

	return `${hours}h ${minutes}min`;
};

export const formatGenreForUrl = (genre: string) =>
	`/${RoutesEnum.MOVIES_GENRE}/${genre.toLowerCase().split(' ').join('-')}`;

export const firstLetterCapitalize = (text: string): string =>
	text.slice(0, 1).toUpperCase() + text.slice(1);

export const getAge = (birthday: string) => {
	const date = new Date(birthday);
	const diff = Date.now() - date.getTime();
	const age = new Date(diff);

	return Math.abs(age.getUTCFullYear() - 1970);
};

export const getAgeBetweenTwoDate = (birthday: string, deathday: string) => {
	const dateBirthday = new Date(birthday);
	const dateDeathday = new Date(deathday);
	const diff = dateDeathday.getTime() - dateBirthday.getTime();
	const age = new Date(diff);

	return Math.abs(age.getUTCFullYear() - 1970);
};

export const formatDate = (date: string, locale: LanguageEnum) => {
	const newDate = new Date(date);

	const formatByLocale = () => {
		switch (locale) {
			case LanguageEnum.En:
				return 'MMMM dd, yyyy';
			case LanguageEnum.Fr:
				return 'dd MMMM yyyy';
			case LanguageEnum.Es:
				return 'dd MMMM yyy';
			case LanguageEnum.De:
				return 'dd. MMMM yyyy';

			default:
				return 'MMMM dd, yyyy';
		}
	};

	const getLocale = () => {
		switch (locale) {
			case LanguageEnum.En:
				return enGB;
			case LanguageEnum.Fr:
				return fr;
			case LanguageEnum.Es:
				return es;
			case LanguageEnum.De:
				return de;

			default:
				return enGB;
		}
	};

	return format(newDate, formatByLocale(), { locale: getLocale() });
};

export const toastSuccess = (message: string, autoClose?: number) =>
	toast.success(message, {
		position: 'top-right',
		autoClose: autoClose ?? 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	});
