const validation = {
	email: {
		required: 'The email field is required',
		pattern: {
			value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
			message: 'The email address is not in the correct format',
		},
	},
	password: {
		required: 'The password field is required',
		minLength: {
			value: 8,
			message: 'Password must be at least 8 characters',
		},
	},
};

export default validation;
