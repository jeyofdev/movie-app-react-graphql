import Modal from '@components/ui/modals/Modal';
import { SignUpModalPropsType } from '../../../types/types/props';
import useStyles from './style';

const SignUpModal = ({ open, setOpen, children }: SignUpModalPropsType) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const styles = useStyles();

	return (
		<Modal open={open} setOpen={() => setOpen(false)}>
			{children}
		</Modal>
	);
};

export default SignUpModal;
