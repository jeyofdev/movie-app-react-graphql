/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuItem from '@components/items/MenuItem/MenuItem';
import { Box, Typography, useTheme } from '@mui/material';
import { RoutesEnum } from '../../../types/enums';
import { BlockSidebarMenuProps } from '../../../types/types/props';
import useStyles from './style';

const MenuItemsBlock = ({
	title,
	menuItems,
	menuItemsOriginal,
	menuItemActive,
	setMenuItemActive,
	mobile = false,
	isGenre = false,
	boxStyles,
	setCloseMenuMobile,
}: BlockSidebarMenuProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={{ ...styles.root, ...boxStyles }}>
			{!mobile && title && (
				<Typography variant='h6' sx={styles.menuItemsBlockTitle}>
					{title}
				</Typography>
			)}

			{menuItems.map((menuItem: any, i: number) => (
				<MenuItem
					key={menuItem?.id}
					id={menuItem?.id}
					label={!mobile && menuItem?.name}
					icon={menuItem?.icon}
					link={
						isGenre && menuItemsOriginal
							? `${RoutesEnum.MOVIES_GENRE}/${menuItemsOriginal[i]?.name
									.toLowerCase()
									.replaceAll(' ', '-')}`
							: menuItem?.link
					}
					active={
						isGenre && menuItemsOriginal
							? menuItemActive ===
							  menuItemsOriginal[i]?.name?.split(' ')?.join('-').toLowerCase()
							: menuItemActive ===
							  menuItem?.value?.split(' ')?.join('-').toLowerCase()
					}
					setMenuItemActive={setMenuItemActive}
					disableRipple={mobile}
					setCloseMenuMobile={setCloseMenuMobile}
				/>
			))}
		</Box>
	);
};

export default MenuItemsBlock;
