import { IContext } from '../../context';
import {
	QueryPersonCastByMovieArgs,
	QueryPersonCrewByMovieArgs,
	QueryPersonDetailsArgs,
} from '../../__generated__/resolvers-types';

const personQueries = {
	personDetails: async (
		_: never,
		args: QueryPersonDetailsArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.persons.findPersonDetails(args);
		} catch (error) {
			throw new Error('error');
		}
	},

	personCastByMovie: async (
		_: never,
		args: QueryPersonCrewByMovieArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.persons.findCastByPerson(args);
		} catch (error) {
			throw new Error('error');
		}
	},

	personCrewByMovie: async (
		_: never,
		args: QueryPersonCastByMovieArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.persons.findCrewByPerson(args);
		} catch (error) {
			throw new Error('error');
		}
	},
};

export default personQueries;
