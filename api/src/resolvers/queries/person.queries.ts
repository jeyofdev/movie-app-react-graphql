import { IContext } from '../../context';
import {
	QueryMoviesByCastPersonArgs,
	QueryPersonCastByMovieArgs,
	QueryPersonCrewByMovieArgs,
	QueryPersonDetailsArgs,
} from '../../__generated__/resolvers-types';
import NotFoundError from '../../errors/NotFound.error';

const personQueries = {
	personDetails: async (
		_: never,
		args: QueryPersonDetailsArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.persons.findPersonDetails(args);
		} catch (error) {
			throw new NotFoundError('No person was found with this id', 'personId');
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
			throw new NotFoundError('No person was found with this id', 'personId');
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
			throw new NotFoundError('No person was found with this id', 'personId');
		}
	},

	moviesByCastPerson: async (
		_: never,
		args: QueryMoviesByCastPersonArgs,
		context: IContext,
	) => {
		try {
			return await context.dataSource.persons.moviesByCastPerson(args);
		} catch (error) {
			throw new NotFoundError('No person was found with this id', 'personId');
		}
	},
};

export default personQueries;
