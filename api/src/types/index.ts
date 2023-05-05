enum LanguageEnum {
	FR = 'fr-Fr',
	EN = 'en-EN',
	US = 'en-US',
	ES = 'es-Es',
}

export interface IMoviesArgs {
	movieId: number;
}

export interface IPersonsArgs {
	personId: number;
}

export interface ICollectionsArgs {
	collectionId: number;
}

export interface IMoviesListOptions {
	language: LanguageEnum;
	page: number;
}
