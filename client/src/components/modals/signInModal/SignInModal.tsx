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
import { ChangeEvent, useState } from 'react';
import { ForgotDatasType, FormDatasLoginType } from '../../../types';
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

	const [error, setError] = useState('');
	const [loginFormDatas, setLoginFormDatas] = useState<FormDatasLoginType>({
		email: '',
		password: '',
	});

	const [forgotFormDatas, setForgotFormDatas] = useState<ForgotDatasType>({
		email: '',
	});

	const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
		setLoginFormDatas({ ...loginFormDatas, [e.target.name]: e.target.value });
	};

	const handleChangeForgot = (e: ChangeEvent<HTMLInputElement>) => {
		setForgotFormDatas({ ...forgotFormDatas, [e.target.name]: e.target.value });
	};

	const handleSocialLogin = async (
		provider: GoogleAuthProvider | GithubAuthProvider,
	) => {
		await socialMediaAuth(provider);
		setOpen(false);
	};

	const handleSubmitLogin = () => {
		if (!loginFormDatas.email || !loginFormDatas.password) {
			setError('All form fields are required');
		} else {
			signIn(loginFormDatas.email, loginFormDatas.password);

			setLoginFormDatas({
				email: '',
				password: '',
			});

			setOpen(false);
		}
	};

	const handleSubmitEmail = () => {
		if (!forgotFormDatas.email) {
			setError('All form fields are required');
		} else {
			forgotPassword(forgotFormDatas.email);

			setLoginFormDatas({
				email: '',
				password: '',
			});

			setOpen(false);
		}
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
						{error && (
							<Alert variant='filled' severity='error'>
								{error}
							</Alert>
						)}

						<Box sx={styles.inputsBox}>
							<Box>
								<InputText
									label='Email'
									id='email'
									name='email'
									placeholder='ex. username@gmail.com'
									icon={faEnvelope}
									value={loginFormDatas.email}
									onChange={handleChangeLogin}
								/>
							</Box>
							<Box>
								<InputText
									password
									label='Password'
									id='password'
									name='password'
									placeholder='************'
									icon={faLock}
									value={loginFormDatas.password}
									onChange={handleChangeLogin}
								/>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
									}}
								>
									<RedirectWithTextButton
										labelBtn='Forgot password'
										onClick={() => setStep(2)}
									/>
								</Box>
							</Box>
						</Box>

						<Button
							sx={styles.btnSubmit}
							variant='contained'
							onClick={handleSubmitLogin}
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
							onClick={onRedirect}
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
				>
					<Box sx={styles.form}>
						{error && (
							<Alert variant='filled' severity='error'>
								{error}
							</Alert>
						)}

						<Box sx={styles.inputsBox}>
							<Box>
								<InputText
									label='Email'
									id='email'
									name='email'
									placeholder='ex. username@gmail.com'
									icon={faEnvelope}
									value={forgotFormDatas.email}
									onChange={handleChangeForgot}
								/>
							</Box>
						</Box>

						<Button
							sx={styles.btnSubmit}
							variant='contained'
							onClick={handleSubmitEmail}
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
							onClick={onRedirect}
						/>
					</Box>
				</Modal>
			)}
		</>
	);
};

export default SignInModal;
