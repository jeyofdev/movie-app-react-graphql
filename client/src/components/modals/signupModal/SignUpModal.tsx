import SocialButton from '@components/ui/Button/socialButton/SocialButton';
import InputText from '@components/ui/form/inputText/InputText';
import Modal from '@components/ui/modals/Modal';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Alert, Box, Button, Typography, useTheme } from '@mui/material';
import { signUp, socialMediaAuth } from '@services/auth';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { ChangeEvent, useState } from 'react';
import { FormDatasRegisterType } from '../../../types';
import { SignUpModalPropsType } from '../../../types/types/props';
import useStyles from './style';

const SignUpModal = ({
	open,
	setOpen,
	title,
	step,
	setStep,
}: SignUpModalPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const [formDatas, setformData] = useState<FormDatasRegisterType>({
		email: '',
		password: '',
		passwordConfirm: '',
	});

	const [error, setError] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setformData({ ...formDatas, [e.target.name]: e.target.value });
	};

	const handleSocialLogin = async (
		provider: GoogleAuthProvider | GithubAuthProvider,
	) => {
		await socialMediaAuth(provider);
		setOpen(false);
	};

	const handleEmailLogin = () => {
		if (!formDatas.email || !formDatas.password || !formDatas.passwordConfirm) {
			setError('All form fields are required');
		}

		if (formDatas.password !== formDatas.passwordConfirm) {
			setError('Passwords do not match');
		} else {
			signUp(formDatas.email, formDatas.password);

			setformData({
				email: '',
				password: '',
				passwordConfirm: '',
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

						<SocialButton
							icon={faEnvelope}
							label='Continue with email'
							onClick={() => setStep(2)}
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
							<InputText
								label='Email'
								id='email'
								name='email'
								icon={faEnvelope}
								value={formDatas.email}
								onChange={handleChange}
							/>
							<InputText
								password
								label='Password'
								id='password'
								name='password'
								icon={faLock}
								value={formDatas.password}
								onChange={handleChange}
							/>
							<InputText
								password
								label='Password confirm'
								id='passwordConfirm'
								name='passwordConfirm'
								icon={faLock}
								value={formDatas.passwordConfirm}
								onChange={handleChange}
							/>
						</Box>

						<Button
							sx={styles.btnSubmit}
							variant='contained'
							onClick={handleEmailLogin}
						>
							<Typography variant='h6' sx={styles.btnSubmitTypo}>
								Sign in with email
							</Typography>
						</Button>
					</Box>
				</Modal>
			)}
		</>
	);
};

export default SignUpModal;
