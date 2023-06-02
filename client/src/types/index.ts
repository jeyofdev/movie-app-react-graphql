export type FormDatasRegisterType = {
	email: string;
	password: string;
	passwordConfirm: string;
};

export type FormDatasLoginType = Pick<
	FormDatasRegisterType,
	'email' | 'password'
>;
