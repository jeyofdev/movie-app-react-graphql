import { IContext } from '../../context';
import { Movie } from '../../__generated__/resolvers-types';
import NotFoundError from '../../errors/NotFound.error';

const parents = {
	Movie: {
		images: async (parent: Movie, __: never, context: IContext) => {
			try {
				return await context.dataSource.movies.findImagesByMovie({
					movieId: parent.id,
				});
			} catch (error) {
				throw new NotFoundError('No movie was found with this id', 'movieId');
			}
		},
	},
};

export default parents;
