import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MenuItemPropsType } from '../../../types/types/props';
import useStyles from './style';

const MenuItem = ({
	id,
	link,
	active,
	label,
	icon,
	setMenuItemActive,
}: MenuItemPropsType) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const styles = useStyles(theme);

	const handleClick = () => {
		setMenuItemActive(id);
		navigate(link);
	};

	return (
		<BaseButton onClick={handleClick} style={styles.root} active={active}>
			<FontAwesomeIcon icon={icon} style={styles.icon} />
			<Typography variant='body1' sx={styles.label}>
				{label}
			</Typography>
		</BaseButton>
	);
};

export default MenuItem;
