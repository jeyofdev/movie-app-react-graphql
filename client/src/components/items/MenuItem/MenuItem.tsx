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
	disableRipple,
	setMenuItemActive,
}: MenuItemPropsType) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const styles = useStyles(theme);

	const handleClick = () => {
		setMenuItemActive(label?.split(' ')?.join('-').toLowerCase());
		navigate(link, {
			state: {
				genreName: label?.split(' ')?.join('-')?.toLowerCase(),
				genreId: Number(id),
			},
		});
	};

	return (
		<BaseButton
			onClick={handleClick}
			disableRipple={disableRipple}
			style={styles.root}
			active={active}
		>
			{icon ? <FontAwesomeIcon icon={icon} style={styles.icon} /> : null}
			<Typography variant='body1' sx={styles.label}>
				{label}
			</Typography>
		</BaseButton>
	);
};

export default MenuItem;
