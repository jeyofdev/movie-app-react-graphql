import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { SocialButtonPropsType } from '../../../../types/types/props';
import useStyles from './style';

const SocialButton = ({ icon, label, onClick }: SocialButtonPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Button
			variant='outlined'
			sx={styles.socialBtn}
			onClick={onClick}
			startIcon={<FontAwesomeIcon icon={icon} style={styles.icon} />}
		>
			<Box sx={styles.typoBox}>
				<Typography variant='body1' sx={styles.typo}>
					{label}
				</Typography>
			</Box>
		</Button>
	);
};

export default SocialButton;
