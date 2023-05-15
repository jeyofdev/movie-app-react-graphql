import { IContext } from '../../context';
import { QueryGenresArgs } from '../../__generated__/resolvers-types';
import NotFoundError from '../../errors/NotFound.error';

const genreQueries = {
	genres: async (_: never, args: QueryGenresArgs, context: IContext) => {
		try {
			return await context.dataSource.genres.findGenres(args);
		} catch (err) {
			throw new NotFoundError('No genre was found');
		}
	},
};

export default genreQueries;
