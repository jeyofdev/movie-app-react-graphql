import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Typography, useTheme } from '@mui/material';
import { SocialButtonPropsType } from '../../../../types/types/props';
import useStyles from './style';

const SocialButton = ({ icon, label }: SocialButtonPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Button
			variant='outlined'
			sx={styles.socialBtn}
			startIcon={
				<FontAwesomeIcon
					icon={icon}
					color={theme.palette.primary.main}
					style={styles.icon}
				/>
			}
		>
			<Typography sx={styles.typo}>{label}</Typography>
		</Button>
	);
};

export default SocialButton;
