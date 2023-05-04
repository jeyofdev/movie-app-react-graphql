import { MoviesResponse } from '../__generated__/resolvers-types';

const setMoviesResult = (movies: MoviesResponse) => ({
	page: movies.page,
	results: movies.results,
	total_pages: movies.total_pages,
	total_results: movies.total_results,
});

export default setMoviesResult;
