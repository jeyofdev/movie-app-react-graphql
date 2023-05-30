import { Typography, useTheme } from '@mui/material';
import { PersonInfoProps } from '../../../types/types/props';
import useStyles from './style';

const PersonInfo = ({
	title,
	value,
	subValue,
	subValueEnd,
}: PersonInfoProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<>
			<Typography variant='h5' sx={styles.title}>
				{title}
			</Typography>

			<Typography variant='body2' sx={styles.content}>
				{value} {subValue && `(${subValue} ${subValueEnd})`}
			</Typography>
		</>
	);
};

export default PersonInfo;
