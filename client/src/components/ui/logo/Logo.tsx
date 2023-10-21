import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { Trans } from '@lingui/macro';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../../types/enums';
import { LogoPropsType } from '../../../types/types/props';
import useStyles from './style';

const Logo = ({ landing, stylesBox }: LogoPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();

	return (
		<Box sx={{ ...styles.topContentBox(landing ?? false), ...stylesBox }}>
			<FontAwesomeIcon
				icon={faTicket}
				color={theme.palette.primary.main}
				style={styles.topIcon}
				onClick={() => navigate(RoutesEnum.ROOT)}
			/>
			<Typography
				variant='h4'
				sx={styles.topTitle}
				onClick={() => navigate(RoutesEnum.ROOT)}
			>
				<Trans>Movies</Trans>
			</Typography>
		</Box>
	);
};

export default Logo;
