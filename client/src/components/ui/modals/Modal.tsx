import { faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Dialog, Typography, useTheme } from '@mui/material';
import { ModalPropsType } from '../../../types/types/props';
import useStyles from './style';

const Modal = ({
	open,
	setOpen,
	close,
	back,
	title,
	setStep,
	children,
}: ModalPropsType) => {
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
				{close && (
					<Box sx={{ ...styles.iconBox, ...styles.iconCloseBox }}>
						<Button variant='text' sx={styles.iconBtn} onClick={handleClose}>
							<FontAwesomeIcon
								icon={faTimes}
								color={theme.palette.primary.main}
								style={styles.icon}
							/>
						</Button>
					</Box>
				)}

				{back && (
					<Box sx={{ ...styles.iconBox, ...styles.iconBackBox }}>
						<Button
							variant='text'
							sx={styles.iconBtn}
							onClick={() => (setStep ? setStep(1) : {})}
						>
							<FontAwesomeIcon
								icon={faChevronLeft}
								color={theme.palette.primary.main}
								style={styles.icon}
							/>
						</Button>
					</Box>
				)}
				<Typography variant='h2' sx={styles.title}>
					{title}
				</Typography>
				{children}
			</Dialog>
		</Box>
	);
};

export default Modal;
