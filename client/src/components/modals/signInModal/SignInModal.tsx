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
import { signIn, socialMediaAuth } from '@services/auth';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { ChangeEvent, useState } from 'react';
import { FormDatasLoginType } from '../../../types';
import { SignInModalPropsType } from '../../../types/types/props';
import useStyles from './style';

const SignInModal = ({ open, setOpen, title }: SignInModalPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const [error, setError] = useState('');
	const [formDatas, setformData] = useState<FormDatasLoginType>({
		email: '',
		password: '',
	});

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
		if (!formDatas.email || !formDatas.password) {
			setError('All form fields are required');
		} else {
			signIn(formDatas.email, formDatas.password);

			setformData({
				email: '',
				password: '',
			});

			setOpen(false);
		}
	};

	return (
		<Modal open={open} setOpen={() => setOpen(false)} close title={title}>
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
					<InputText
						label='Email'
						id='email'
						name='email'
						icon={faEnvelope}
						value={formDatas.email}
						onChange={handleChange}
					/>
					<InputText
						label='Password'
						id='password'
						name='password'
						icon={faLock}
						value={formDatas.password}
						onChange={handleChange}
					/>
				</Box>

				<Button
					sx={styles.btnSubmit}
					variant='contained'
					onClick={handleEmailLogin}
				>
					<Typography variant='h6' sx={styles.btnSubmitTypo}>
						Log in
					</Typography>
				</Button>
			</Box>
		</Modal>
	);
};

export default SignInModal;
