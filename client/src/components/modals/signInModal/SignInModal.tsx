import RedirectWithTextButton from '@components/ui/Button/redirectWithTextButton/RedirectWithTextButton';
import SocialButton from '@components/ui/Button/socialButton/SocialButton';
import InputText from '@components/ui/form/inputText/InputText';
import Modal from '@components/ui/modals/Modal';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {
	Alert,
	Box,
	Button,
	Divider,
	Typography,
	useTheme,
} from '@mui/material';
import { forgotPassword, signIn, socialMediaAuth } from '@services/auth';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
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
	const theme = useTheme();
	const styles = useStyles(theme);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitted },
	} = useForm({ mode: 'onSubmit' });

	const handleSocialLogin = async (
		provider: GoogleAuthProvider | GithubAuthProvider,
	) => {
		await socialMediaAuth(provider);
		setOpen(false);
	};

	const handleSubmitLogin: SubmitHandler<FieldValues> = (data: FieldValues) => {
		signIn(data.email, data.password);
		reset();
		setOpen(false);
	};

	const handleSubmitEmail: SubmitHandler<FieldValues> = (data: FieldValues) => {
		forgotPassword(data.email);
		reset();

		setOpen(false);
	};

	return (
		<>
			{step === 1 && (
				<Modal
					open={open}
					setOpen={() => setOpen(false)}
					close
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
					</Box>

					<Box sx={styles.dividerBox}>
						<Box sx={styles.divider}>
							<Divider sx={styles.dividerContent}>
								<Typography variant='body2'>or</Typography>
							</Divider>
						</Box>
					</Box>

					<Box sx={styles.form}>
						{isSubmitted && Object.keys(errors).length > 0 && (
							<Alert variant='filled' severity='error'>
								The form contains errors
							</Alert>
						)}

						<Box sx={styles.inputsBox}>
							<Box>
								<InputText
									control={control}
									label='Email'
									id='email'
									name='email'
									placeholder='ex. username@gmail.com'
									icon={faEnvelope}
									validation={validation?.email}
								/>
							</Box>
							<Box>
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
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
									}}
								>
									<RedirectWithTextButton
										labelBtn='Forgot password'
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
								Log in
							</Typography>
						</Button>
					</Box>

					<Box sx={styles.redirectBox}>
						<RedirectWithTextButton
							labelBtn='Sign up'
							content="Don't have an account ?"
							onClick={() => {
								reset();
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
					back
					title={title?.stepTwo}
					setStep={setStep}
					resetForm={reset}
				>
					<Box sx={styles.form}>
						{isSubmitted && Object.keys(errors).length > 0 && (
							<Alert variant='filled' severity='error'>
								The form contains errors
							</Alert>
						)}

						<Box sx={styles.inputsBox}>
							<Box>
								<InputText
									control={control}
									label='Email'
									id='email'
									name='email'
									placeholder='ex. username@gmail.com'
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
								Enjoy
							</Typography>
						</Button>
					</Box>

					<Box sx={styles.redirectBox}>
						<RedirectWithTextButton
							labelBtn='Sign up'
							content="Don't have an account ?"
							onClick={() => {
								reset();
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
