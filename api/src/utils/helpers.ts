import { OptionsInput } from '../__generated__/resolvers-types';

const formatUrlQuery = (
	baseUrl: string,
	apiKey: string,
	pathParams?: string | number,
	queryString?: OptionsInput,
) => {
	let url = `${baseUrl}/`;
	url += pathParams ?? `${pathParams}`;
	url += `?api_key=${apiKey}&`;

	if (queryString) {
		const allQueryStrings = Object.entries(queryString)
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			.filter(([_, value]) => value)
			.map(value => value.join('='));

		url += allQueryStrings.join('&');
	}

	return url;
};

export default formatUrlQuery;
