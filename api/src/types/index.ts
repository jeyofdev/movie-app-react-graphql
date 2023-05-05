enum LanguageEnum {
	FR = 'fr-Fr',
	EN = 'en-EN',
	US = 'en-US',
	ES = 'es-Es',
}

export interface IMoviesArgs {
	movieId: number;
	options: IListOptions;
}

export interface IPersonsArgs {
	personId: number;
	options: IListOptions;
}

export interface ICollectionsArgs {
	collectionId: number;
	options: IListOptions;
}

export interface IListOptions {
	language: LanguageEnum;
	page: number;
}
