import { IContext } from '../../context';
import {
	QueryMoviesByCollectionArgs,
	QueryTranslationsByCollectionArgs,
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

	translationsByCollection: async (
		_: never,
		args: QueryTranslationsByCollectionArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.collections.findTranslationsByCollection(
				args,
			);
		} catch (error) {
			throw new Error('error');
		}
	},
};

export default collectionQueries;
