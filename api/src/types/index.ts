import { OptionsInput } from '__generated__/resolvers-types';

// enum LanguageEnum {
// 	FR = 'fr-Fr',
// 	EN = 'en-EN',
// 	US = 'en-US',
// 	ES = 'es-Es',
// }

export interface IMoviesArgs {
	movieId: number;
	options: OptionsInput;
}

export interface IPersonsArgs {
	personId: number;
	options: OptionsInput;
}

export interface ICollectionsArgs {
	collectionId: number;
	options: OptionsInput;
}
