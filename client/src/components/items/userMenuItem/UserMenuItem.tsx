import { MenuItem, Typography } from '@mui/material';
import { UserMenuItemPropsType } from '../../../types/types/props';
import useStyles from './style';

const UserMenuItem = ({ onClick, label }: UserMenuItemPropsType) => {
	const styles = useStyles();

	return (
		<MenuItem onClick={onClick}>
			<Typography sx={styles.label}>{label}</Typography>
		</MenuItem>
	);
};

export default UserMenuItem;
