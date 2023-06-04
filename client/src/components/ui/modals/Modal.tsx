import { ThemeContext } from '@context/ThemeContext';
import { faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Dialog, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
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
	const { themeMode } = useContext(ThemeContext);

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
				sx={styles.modalBox(themeMode)}
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

				<Box sx={styles.contentBox}>
					<Typography variant='h3' sx={styles.title}>
						{title}
					</Typography>
					{children}
				</Box>
			</Dialog>
		</Box>
	);
};

export default Modal;
