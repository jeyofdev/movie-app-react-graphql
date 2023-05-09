import PersonService from '../services/Person.service';
import CollectionService from '../services/Collection.service';
import MovieService from '../services/Movie.service';
import KeywordService from '../services/Keyword.service';

export interface IContext {
	dataSource: {
		movies: MovieService;
		collections: CollectionService;
		persons: PersonService;
		keywords: KeywordService;
	};
}

export const context: IContext = {
	dataSource: {
		movies: new MovieService(),
		collections: new CollectionService(),
		persons: new PersonService(),
		keywords: new KeywordService(),
	},
};
