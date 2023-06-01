import SocialButton from '@components/ui/Button/socialButton/SocialButton';
import Modal from '@components/ui/modals/Modal';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Box, useTheme } from '@mui/material';
import { socialMediaAuth } from '@services/auth';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { SignUpModalPropsType } from '../../../types/types/props';
import useStyles from './style';

const SignUpModal = ({ open, setOpen, title }: SignUpModalPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const handleSocialLogin = async (
		provider: GoogleAuthProvider | GithubAuthProvider,
	) => {
		await socialMediaAuth(provider);
		setOpen(false);
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

				<SocialButton
					icon={faEnvelope}
					label='Continue with email'
					onClick={() => {}}
				/>
			</Box>
		</Modal>
	);
};

export default SignUpModal;
