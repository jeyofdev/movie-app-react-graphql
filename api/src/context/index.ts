import PersonService from '../services/Person.service';
import CollectionService from '../services/Collection.service';
import MovieService from '../services/Movie.service';
import KeywordService from '../services/Keyword.service';
import GenreService from '../services/Genre.service';
import SearchService from '../services/Search.service';

export interface IContext {
	dataSource: {
		movies: MovieService;
		collections: CollectionService;
		persons: PersonService;
		keywords: KeywordService;
		genres: GenreService;
		search: SearchService;
	};
}

export const context: IContext = {
	dataSource: {
		movies: new MovieService(),
		collections: new CollectionService(),
		persons: new PersonService(),
		keywords: new KeywordService(),
		genres: new GenreService(),
		search: new SearchService(),
	},
};
