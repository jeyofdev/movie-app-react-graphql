import useTheme from '@hooks/useTheme';
import { Alert, Typography } from '@mui/material';
import { AlertPropsType } from '../../../types/types/props';
import useStyles from './style';

const AlertBase = ({ children }: AlertPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Alert variant='outlined' severity='error'>
			<Typography variant='h6' sx={styles.typo}>
				{children}
			</Typography>
		</Alert>
	);
};

export default AlertBase;
