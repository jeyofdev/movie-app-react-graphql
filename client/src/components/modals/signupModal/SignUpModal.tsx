import SocialButton from '@components/ui/Button/socialButton/SocialButton';
import Modal from '@components/ui/modals/Modal';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Box, useTheme } from '@mui/material';
import { SignUpModalPropsType } from '../../../types/types/props';
import useStyles from './style';

const SignUpModal = ({ open, setOpen, title }: SignUpModalPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Modal open={open} setOpen={() => setOpen(false)} close title={title}>
			<Box sx={styles.socialBtns}>
				<SocialButton icon={faGoogle} label='Continue with Google' />
				<SocialButton icon={faGithub} label='Continue with GitHub' />
			</Box>
		</Modal>
	);
};

export default SignUpModal;
