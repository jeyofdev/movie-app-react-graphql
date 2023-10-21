import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum } from '../../../types/enums';
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
	setCloseMenuMobile,
}: MenuItemPropsType) => {
	const { theme } = useTheme();
	const navigate = useNavigate();
	const styles = useStyles(theme);
	const { width } = useWindowSize();

	const handleClick = () => {
		if (width < BreakpointEnum.SM) {
			setCloseMenuMobile(false);
		}

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
			{icon ? (
				<FontAwesomeIcon
					icon={icon}
					style={width >= BreakpointEnum.SM ? styles.icon : styles.iconMobile}
				/>
			) : null}
			<Typography
				variant={width >= BreakpointEnum.SM ? 'body1' : 'h5'}
				sx={styles.label}
			>
				{label}
			</Typography>
		</BaseButton>
	);
};

export default MenuItem;
