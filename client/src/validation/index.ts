import { t } from '@lingui/macro';

const validation = {
	email: {
		required: t`The email field is required`,
		pattern: {
			value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
			message: t`The email address is not in the correct format`,
		},
	},
	password: {
		required: t`The password field is required`,
		minLength: {
			value: 8,
			message: t`The password must be at least 8 characters`,
		},
	},
	passwordConfirm: {
		required: t`The password confirm field is required`,
		minLength: {
			value: 8,
			message: t`The password must be at least 8 characters`,
		},
	},
};

export default validation;
