import { MovieResponse } from '__generated__/resolvers-types';

const setMoviesResult = (movies: MovieResponse) => ({
	page: movies.page,
	results: movies.results,
	total_pages: movies.total_pages,
	total_results: movies.total_results,
});

export default setMoviesResult;
