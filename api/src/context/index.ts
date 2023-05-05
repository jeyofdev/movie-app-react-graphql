import CollectionsService from '../services/Collection.service';
import MoviesService from '../services/Movie.service';

export interface IContext {
	dataSource: {
		movies: MoviesService;
		collections: CollectionsService;
	};
}

export const context: IContext = {
	dataSource: {
		movies: new MoviesService(),
		collections: new CollectionsService(),
	},
};
