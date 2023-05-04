import MoviesService from '../services/Movie.service';

export interface IContext {
	dataSource: {
		movies: MoviesService;
	};
}

export const context: IContext = {
	dataSource: { movies: new MoviesService() },
};
