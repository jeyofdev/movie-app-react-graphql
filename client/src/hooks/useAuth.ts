import {
	socialMediaAuth,
	signUp,
	signIn,
	authErrorCredentials,
	forgotPassword as forgotPasswordFn,
} from '@services/auth';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';
import { FieldValues, SubmitHandler, UseFormReset } from 'react-hook-form';
import { toastSuccess } from '@utils/index';
import { t } from '@lingui/macro';

type UseAuthType = {
	socialLogin: (
		provider: GoogleAuthProvider | GithubAuthProvider,
	) => Promise<void>;
	SignUpWithEmail: SubmitHandler<FieldValues>;
	SignInWithEmail: SubmitHandler<FieldValues>;
	forgotPassword: SubmitHandler<FieldValues>;
};

type UseAuthArgsType = {
	setOpen: Dispatch<SetStateAction<boolean>>;
	resetForm: UseFormReset<FieldValues>;
	setError: React.Dispatch<React.SetStateAction<string | null | undefined>>;
};

const useAuth = ({
	setOpen,
	resetForm,
	setError,
}: UseAuthArgsType): UseAuthType => {
	const socialLogin = async (
		provider: GoogleAuthProvider | GithubAuthProvider,
	) => {
		await socialMediaAuth(provider);
		setOpen(false);
	};

	const SignUpWithEmail: SubmitHandler<FieldValues> = (data: FieldValues) => {
		signUp(data.email, data.password)
			.then(() => {
				resetForm();
				setOpen(false);
				toastSuccess(t`you have successfully registered`, 5000);
			})
			.catch(err => {
				if (err.code === 'auth/email-already-in-use') {
					setError(t`An account is already in use with this email.`);
				}
			});
	};

	const SignInWithEmail: SubmitHandler<FieldValues> = (data: FieldValues) => {
		signIn(data.email, data.password)
			.then(() => {
				resetForm();
				setOpen(false);
				toastSuccess(t`You are connected`, 5000);
			})
			.catch(err => {
				if (authErrorCredentials(err.code)) {
					setError(
						t`Your credentials are incorrect. Please double-check your login details and try again.`,
					);
				}
			});
	};

	const forgotPassword: SubmitHandler<FieldValues> = (data: FieldValues) => {
		forgotPasswordFn(data.email)
			.then(() => {
				resetForm();
				setOpen(false);
			})
			.catch(() => {
				resetForm();
				setOpen(false);
			});

		toastSuccess(
			t`If the email entered corresponds to an application user, you will receive an email with instructions to reset your password`,
			10000,
		);
	};

	return { socialLogin, SignUpWithEmail, SignInWithEmail, forgotPassword };
};

export default useAuth;
