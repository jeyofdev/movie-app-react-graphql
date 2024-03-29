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
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { Alert, Box, Button, Typography } from '@mui/material';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
	const { theme } = useTheme();
	const styles = useStyles(theme);
	useLingui();
	const [loginError, setLoginError] = useState<string | null>();

	const {
		control,
		handleSubmit,
		reset,
		getValues,
		watch,
		formState: { errors, isSubmitted },
	} = useForm({ mode: 'onSubmit' });

	const { socialLogin, SignUpWithEmail } = useAuth({
		setOpen,
		resetForm: reset,
		setError: setLoginError,
	});

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
							label={`${t`Continue with`} Google`}
							onClick={() => socialLogin(googleProvider)}
						/>

						<SocialButton
							icon={faGithub}
							label={`${t`Continue with`} GitHub`}
							onClick={() => socialLogin(githubProvider)}
						/>

						<SocialButton
							icon={faEnvelope}
							label={t`Continue with email`}
							onClick={() => setStep(2)}
						/>
					</Box>

					<Box sx={styles.redirectBox}>
						<RedirectWithTextButton
							labelBtn={t`Login`}
							content={t`Already a member ?`}
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
								{loginError ?? t`The form contains errors`}
							</Alert>
						)}

						<Box sx={styles.inputsBox}>
							<InputText
								control={control}
								label={t`Email`}
								id='email'
								name='email'
								placeholder='ex. username@gmail.com'
								icon={faEnvelope}
								validation={validation?.email}
							/>
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
							<InputText
								control={control}
								password
								label={t`Password Confirmation`}
								id='passwordConfirm'
								name='passwordConfirm'
								placeholder='************'
								icon={faLock}
								validation={{
									...validation?.passwordConfirm,
									validate: (value: string) => {
										if (value === getValues().password) return true;
										return t`The passwords must match`;
									},
								}}
							/>
						</Box>

						<Button
							sx={styles.btnSubmit}
							variant='contained'
							onClick={handleSubmit(SignUpWithEmail)}
						>
							<Typography variant='h6' sx={styles.btnSubmitTypo}>
								{t`Sign up with email`}
							</Typography>
						</Button>
					</Box>

					<Box sx={styles.redirectBox}>
						<RedirectWithTextButton
							labelBtn={t`Login`}
							content={t`Already a member ?`}
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
