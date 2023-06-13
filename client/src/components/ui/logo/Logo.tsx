import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Trans } from '@lingui/macro';
import { Box, Typography, useTheme } from '@mui/material';
import { LogoPropsType } from '../../../types/types/props';
import useStyles from './style';

const Logo = ({ landing }: LogoPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.topContentBox(landing ?? false)}>
			<FontAwesomeIcon
				icon={faTicket}
				color={theme.palette.primary.main}
				style={styles.topIcon}
			/>
			<Typography variant='h4' sx={styles.topTitle}>
				<Trans>Movies</Trans>
			</Typography>
		</Box>
	);
};

export default Logo;
