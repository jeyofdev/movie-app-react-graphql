import { IContext } from '../../context';
import { QueryMoviesByKeywordArgs } from '../../__generated__/resolvers-types';
import NotFoundError from '../../errors/NotFound.error';

const keywordQueries = {
	moviesByKeyword: async (
		_: never,
		args: QueryMoviesByKeywordArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.keywords.findMoviesByKeyword(args);
		} catch (error) {
			throw new NotFoundError('No keyword was found with this id', 'keywordId');
		}
	},
};

export default keywordQueries;
