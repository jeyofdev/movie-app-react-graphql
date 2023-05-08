import { GraphQLError, GraphQLErrorExtensions } from 'graphql';

class NotFoundError extends GraphQLError {
	extensions: GraphQLErrorExtensions;

	constructor(message: string, argumentName?: string) {
		super(message);

		this.extensions = {
			statusCode: 404,
			code: 'NOT_FOUND',
		};

		if (argumentName) {
			this.extensions = {
				...this.extensions,
				argumentName,
			};
		}
	}
}

export default NotFoundError;
