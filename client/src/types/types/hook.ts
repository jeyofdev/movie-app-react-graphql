import { ApolloError } from '@apollo/client';

export type LoadingAndErrorOnFetchType = {
	loading: boolean;
	error: ApolloError | undefined;
};
