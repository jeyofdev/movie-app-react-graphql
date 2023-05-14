import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

const Sidebar = () => {
	const styles = useStyles();

	return (
		<Box sx={styles.root}>
			<Box sx={styles.topContentBox}>
				<FontAwesomeIcon icon={faTicket} size='2x' />
				<Typography variant='h4' sx={styles.topTitle}>
					Movies
				</Typography>
			</Box>
		</Box>
	);
};

export default Sidebar;
