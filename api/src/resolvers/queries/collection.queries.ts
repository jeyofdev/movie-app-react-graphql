import { IContext } from '../../context';
import {
	QueryMoviesByCollectionArgs,
	QueryTranslationByCollectionArgs,
} from '../../__generated__/resolvers-types';

const collectionQueries = {
	moviesByCollection: async (
		_: never,
		args: QueryMoviesByCollectionArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.collections.findMoviesByCollection(args);
		} catch (error) {
			throw new Error('error');
		}
	},

	translationByCollection: async (
		_: never,
		args: QueryTranslationByCollectionArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.collections.findTranslationByCollection(
				args,
			);
		} catch (error) {
			throw new Error('error');
		}
	},
};

export default collectionQueries;
