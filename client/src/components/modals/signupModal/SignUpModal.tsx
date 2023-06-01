import SocialButton from '@components/ui/Button/socialButton/SocialButton';
import InputText from '@components/ui/form/inputText/InputText';
import Modal from '@components/ui/modals/Modal';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { socialMediaAuth } from '@services/auth';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
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

	const handleSocialLogin = async (
		provider: GoogleAuthProvider | GithubAuthProvider,
	) => {
		await socialMediaAuth(provider);
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
					title={title?.stepTwo}
				>
					<Box sx={styles.socialBtns}>
						<Box sx={styles.inputsBox}>
							<InputText label='Email' icon={faEnvelope} />
							<InputText label='Password' icon={faEnvelope} />
							<InputText label='Password confirm' icon={faEnvelope} />
						</Box>

						<Button sx={styles.btnSubmit} variant='contained'>
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
