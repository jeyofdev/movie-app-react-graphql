import { Box, Dialog, Typography, useTheme } from '@mui/material';
import { ModalPropsType } from '../../../types/types/props';
import useStyles from './style';

const Modal = ({ open, setOpen, title, children }: ModalPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);
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
				sx={styles.modalBox}
			>
				<Typography variant='h2' sx={styles.title}>
					{title}
				</Typography>
				{children}
			</Dialog>
		</Box>
	);
};

export default Modal;
