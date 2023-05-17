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
