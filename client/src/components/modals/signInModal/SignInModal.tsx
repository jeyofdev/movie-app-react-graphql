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
import useAuth from '@hooks/useAuth';
import useTheme from '@hooks/useTheme';
import { Trans, t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { Alert, Box, Button, Divider, Typography } from '@mui/material';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SignInModalPropsType } from '../../../types/types/props';
import validation from '../../../validation';
import useStyles from './style';

const SignInModal = ({
	open,
	setOpen,
	title,
	onRedirect,
	step,
	setStep,
}: SignInModalPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	useLingui();
	const [signUpError, setSignUpError] = useState<string | null>();

	const {
		control,
		handleSubmit,
		reset,
		watch,
		formState: { errors, isSubmitted },
	} = useForm({ mode: 'onSubmit' });

	const { socialLogin, SignInWithEmail, forgotPassword } = useAuth({
		setOpen,
		resetForm: reset,
		setError: setSignUpError,
	});

	useEffect(() => {
		const subscription = watch(() => {
			setSignUpError(null);
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
							label={`${t`Continue with`} Google`}
							onClick={() => socialLogin(googleProvider)}
						/>

						<SocialButton
							icon={faGithub}
							label={`${t`Continue with`} GitHub`}
							onClick={() => socialLogin(githubProvider)}
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
							onClick={handleSubmit(SignInWithEmail)}
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
							onClick={handleSubmit(forgotPassword)}
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
