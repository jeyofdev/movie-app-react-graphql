import { Box, Dialog } from '@mui/material';
import { ModalPropsType } from '../../../types/types/props';

const Modal = ({ open, setOpen, children }: ModalPropsType) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				{children}
			</Dialog>
		</Box>
	);
};

export default Modal;
