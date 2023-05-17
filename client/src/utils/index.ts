/**
 * Limit text by number words
 * @param text
 * @param limit
 * @returns
 */
// eslint-disable-next-line import/prefer-default-export
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
