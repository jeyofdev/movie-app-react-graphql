import RedirectWithTextButton from '@components/ui/Button/redirectWithTextButton/RedirectWithTextButton';
import SocialButton from '@components/ui/Button/socialButton/SocialButton';
import InputText from '@components/ui/form/inputText/InputText';
import Modal from '@components/ui/modals/Modal';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
	faCircleCheck,
	faEnvelope,
	faLock,
	faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Trans, t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import {
	Alert,
	Box,
	Button,
	Divider,
	Typography,
	useTheme,
} from '@mui/material';
import {
	authErrorCredentials,
	forgotPassword,
	signIn,
	socialMediaAuth,
} from '@services/auth';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { SignInModalPropsType } from '../../../types/types/props';
import useStyles from './style';

const SignInModal = ({
	open,
	setOpen,
	title,
	onRedirect,
	step,
	setStep,
}: SignInModalPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	useLingui();

	const {
		control,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isSubmitted },
	} = useForm({ mode: 'onSubmit' });

	const [signUpError, setSignUpError] = useState<string | null>();
	const [forgotPasswordSuccess, setForgotPasswordSuccess] =
		useState<boolean>(false);

	const handleSocialLogin = async (
		provider: GoogleAuthProvider | GithubAuthProvider,
	) => {
		await socialMediaAuth(provider);
		setOpen(false);
	};

	const handleSubmitLogin: SubmitHandler<FieldValues> = (data: FieldValues) => {
		signIn(data.email, data.password)
			.then(() => {
				reset();
				setOpen(false);
			})
			.catch(err => {
				if (authErrorCredentials(err.code)) {
					setSignUpError(
						t`Your credentials are incorrect. Please double-check your login details and try again.`,
					);
				}
			});
	};

	const handleSubmitEmail: SubmitHandler<FieldValues> = (data: FieldValues) => {
		setForgotPasswordSuccess(false);
		forgotPassword(data.email)
			.then(() => {
				reset();
				// setOpen(false);
				setForgotPasswordSuccess(true);
			})
			.catch(() => {
				setForgotPasswordSuccess(true);
			});
	};

	useEffect(() => {
		const subscription = watch(() => {
			setSignUpError(null);
		});

		return () => subscription.unsubscribe();
	}, [watch]);

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
	};

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
							label={`${t`Continue with`} Google`}
							onClick={() => handleSocialLogin(googleProvider)}
						/>

						<SocialButton
							icon={faGithub}
							label={`${t`Continue with`} GitHub`}
							onClick={() => handleSocialLogin(githubProvider)}
						/>
					</Box>

					<Box sx={styles.dividerBox}>
						<Box sx={styles.divider}>
							<Divider sx={styles.dividerContent}>
								<Typography variant='body2' sx={styles.dividerTypo}>
									<Trans>or</Trans>
								</Typography>
							</Divider>
						</Box>
					</Box>

					<Box sx={styles.form}>
						{isSubmitted && (signUpError || Object.keys(errors).length > 0) && (
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
								{signUpError ?? t`The form contains errors`}
							</Alert>
						)}

						<Box sx={styles.inputsBox}>
							<Box>
								<InputText
									control={control}
									label={t`Email`}
									id='email'
									name='email'
									placeholder='username@gmail.com'
									icon={faEnvelope}
									validation={validation?.email}
								/>
							</Box>
							<Box>
								<InputText
									control={control}
									password
									label={t`Password`}
									id='password'
									name='password'
									placeholder='************'
									icon={faLock}
									validation={validation?.password}
								/>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
									}}
								>
									<RedirectWithTextButton
										labelBtn={t`Forgot your password`}
										onClick={() => {
											reset();
											setStep(2);
										}}
									/>
								</Box>
							</Box>
						</Box>
						<Button
							sx={styles.btnSubmit}
							variant='contained'
							onClick={handleSubmit(handleSubmitLogin)}
						>
							<Typography variant='h6' sx={styles.btnSubmitTypo}>
								<Trans>Login</Trans>
							</Typography>
						</Button>
					</Box>

					<Box sx={styles.redirectBox}>
						<RedirectWithTextButton
							labelBtn={t`Sign up`}
							content={t`Don't have an account ?`}
							onClick={() => {
								reset();
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
						{isSubmitted && Object.keys(errors).length > 0 && (
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
								<Trans>The form contains errors</Trans>
							</Alert>
						)}

						{isSubmitted && forgotPasswordSuccess && (
							<Alert
								variant='filled'
								severity='success'
								color='success'
								sx={styles.alertSuccess}
								iconMapping={{
									success: (
										<FontAwesomeIcon
											icon={faCircleCheck}
											color={theme.palette.success.dark}
											style={styles.alertIcon}
										/>
									),
								}}
							>
								<Trans>
									If the email entered corresponds to an application user, you
									will receive an email with instructions to reset your password
								</Trans>
							</Alert>
						)}

						<Box sx={styles.inputsBox}>
							<Box>
								<InputText
									control={control}
									label={t`Email`}
									id='email'
									name='email'
									placeholder='username@gmail.com'
									icon={faEnvelope}
									validation={validation?.email}
								/>
							</Box>
						</Box>

						<Button
							sx={styles.btnSubmit}
							variant='contained'
							onClick={handleSubmit(handleSubmitEmail)}
						>
							<Typography variant='h6' sx={styles.btnSubmitTypo}>
								<Trans>Send</Trans>
							</Typography>
						</Button>
					</Box>

					<Box sx={styles.redirectBox}>
						<RedirectWithTextButton
							labelBtn={t`Sign up`}
							content={t`Don't have an account ?`}
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

export default SignInModal;
