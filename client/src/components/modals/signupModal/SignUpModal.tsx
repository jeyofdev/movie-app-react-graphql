import RedirectWithTextButton from '@components/ui/Button/redirectWithTextButton/RedirectWithTextButton';
import SocialButton from '@components/ui/Button/socialButton/SocialButton';
import InputText from '@components/ui/form/inputText/InputText';
import Modal from '@components/ui/modals/Modal';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faLock,
	faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Box, Button, Typography, useTheme } from '@mui/material';
import { signUp, socialMediaAuth } from '@services/auth';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { SignUpModalPropsType } from '../../../types/types/props';
import validation from '../../../validation';
import useStyles from './style';

const SignUpModal = ({
	open,
	setOpen,
	title,
	step,
	setStep,
	onRedirect,
}: SignUpModalPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const {
		control,
		handleSubmit,
		reset,
		getValues,
		watch,
		formState: { errors, isSubmitted },
	} = useForm({ mode: 'onSubmit' });

	const [loginError, setLoginError] = useState<string | null>();

	const handleSocialLogin = async (
		provider: GoogleAuthProvider | GithubAuthProvider,
	) => {
		await socialMediaAuth(provider);
		setOpen(false);
	};

	const handleEmailLogin: SubmitHandler<FieldValues> = (data: FieldValues) => {
		signUp(data.email, data.password)
			.then(() => {
				reset();
				setOpen(false);
			})
			.catch(err => {
				if (err.code === 'auth/email-already-in-use') {
					setLoginError('An account is already registered with your email.');
				}
			});
	};

	useEffect(() => {
		const subscription = watch(() => {
			setLoginError(null);
		});

		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<>
			{step === 1 && (
				<Modal
					open={open}
					setOpen={() => setOpen(false)}
					close
					onClose={() => reset()}
					title={title?.stepOne}
				>
					<Box sx={styles.socialBtns}>
						<SocialButton
							icon={faGoogle}
							label='Continue with Google'
							onClick={() => handleSocialLogin(googleProvider)}
						/>

						<SocialButton
							icon={faGithub}
							label='Continue with GitHub'
							onClick={() => handleSocialLogin(githubProvider)}
						/>

						<SocialButton
							icon={faEnvelope}
							label='Continue with email'
							onClick={() => setStep(2)}
						/>
					</Box>

					<Box sx={styles.redirectBox}>
						<RedirectWithTextButton
							labelBtn='Log in'
							content='Already a member ?'
							onClick={() => {
								setStep(1);
								onRedirect();
							}}
						/>
					</Box>
				</Modal>
			)}

			{step === 2 && (
				<Modal
					open={open}
					setOpen={() => setOpen(false)}
					close
					onClose={() => reset()}
					back
					title={title?.stepTwo}
					setStep={setStep}
					resetForm={reset}
				>
					<Box sx={styles.form}>
						{isSubmitted && (loginError || Object.keys(errors).length > 0) && (
							<Alert
								variant='filled'
								severity='error'
								sx={styles.alertDanger}
								iconMapping={{
									error: (
										<FontAwesomeIcon
											icon={faTriangleExclamation}
											color={theme.palette.error.main}
											style={styles.alertIcon}
										/>
									),
								}}
							>
								{loginError ?? 'The form contains errors'}
							</Alert>
						)}

						<Box sx={styles.inputsBox}>
							<InputText
								control={control}
								label='Email'
								id='email'
								name='email'
								placeholder='ex. username@gmail.com'
								icon={faEnvelope}
								validation={validation?.email}
							/>
							<InputText
								control={control}
								password
								label='Password'
								id='password'
								name='password'
								placeholder='************'
								icon={faLock}
								validation={validation?.password}
							/>
							<InputText
								control={control}
								password
								label='Password confirm'
								id='passwordConfirm'
								name='passwordConfirm'
								placeholder='************'
								icon={faLock}
								validation={{
									...validation?.passwordConfirm,
									validate: (value: string) => {
										if (value === getValues().password) return true;
										return 'The passwords must match';
									},
								}}
							/>
						</Box>

						<Button
							sx={styles.btnSubmit}
							variant='contained'
							onClick={handleSubmit(handleEmailLogin)}
						>
							<Typography variant='h6' sx={styles.btnSubmitTypo}>
								Sign up with email
							</Typography>
						</Button>
					</Box>

					<Box sx={styles.redirectBox}>
						<RedirectWithTextButton
							labelBtn='Log in'
							content='Already a member ?'
							onClick={() => {
								reset();
								setStep(1);
								onRedirect();
							}}
						/>
					</Box>
				</Modal>
			)}
		</>
	);
};

export default SignUpModal;
