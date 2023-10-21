import { MenuItem, Typography } from '@mui/material';
import useTheme from '@hooks/useTheme';
import { UserMenuItemPropsType } from '../../../types/types/props';
import useStyles from './style';

const UserMenuItem = ({ onClick, label }: UserMenuItemPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<MenuItem sx={styles.menuItem} onClick={onClick} disableRipple>
			<Typography sx={styles.label}>{label}</Typography>
		</MenuItem>
	);
};

export default UserMenuItem;
