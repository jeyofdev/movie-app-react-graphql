import { IContext } from '../../context';
import {
	QueryMoviesByCollectionArgs,
	QueryTranslationsByCollectionArgs,
} from '../../__generated__/resolvers-types';
import NotFoundError from '../../errors/NotFound.error';

const collectionQueries = {
	moviesByCollection: async (
		_: never,
		args: QueryMoviesByCollectionArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.collections.findMoviesByCollection(args);
		} catch (err) {
			throw new NotFoundError(
				'No collection was found with this id',
				'collectionId',
			);
		}
	},

	translationsByCollection: async (
		_: never,
		args: QueryTranslationsByCollectionArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.collections.findTranslationsByCollection(
				args,
			);
		} catch (err) {
			throw new NotFoundError(
				'No collection was found with this id',
				'collectionId',
			);
		}
	},
};

export default collectionQueries;
