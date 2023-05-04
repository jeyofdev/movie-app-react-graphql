import { IContext } from 'context';

const queries = {
	Query: {
		movies: async (_: never, __: never, context: IContext) => {
			try {
				const movies = await context.dataSource.movies.findMostPopular();

				return {
					page: movies.page,
					results: movies.results,
					total_pages: movies.total_pages,
					total_results: movies.total_results,
				};
			} catch (error) {
				throw new Error('error');
			}
		},
	},
};

export default queries;
