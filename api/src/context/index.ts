import PersonsService from '../services/Person.service';
import CollectionsService from '../services/Collection.service';
import MoviesService from '../services/Movie.service';

export interface IContext {
	dataSource: {
		movies: MoviesService;
		collections: CollectionsService;
		persons: PersonsService;
	};
}

export const context: IContext = {
	dataSource: {
		movies: new MoviesService(),
		collections: new CollectionsService(),
		persons: new PersonsService(),
	},
};
