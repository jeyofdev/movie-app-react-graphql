import { Resolvers } from '__generated__/resolvers-types';
import queries from './queries';
import enums from './enums';

const resolvers: Resolvers = {
	...enums,
	...queries,
};

export default resolvers;
