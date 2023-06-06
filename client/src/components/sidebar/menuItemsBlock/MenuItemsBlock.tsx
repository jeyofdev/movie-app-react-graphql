/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuItem from '@components/items/MenuItem/MenuItem';
import { Box, Typography, useTheme } from '@mui/material';
import { BlockSidebarMenuProps } from '../../../types/types/props';
import useStyles from './style';

const MenuItemsBlock = ({
	title,
	menuItems,
	menuItemActive,
	setMenuItemActive,
	mobile = false,
	isGenre = false,
}: BlockSidebarMenuProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			{!mobile && (
				<Typography variant='h6' sx={styles.menuItemsBlockTitle}>
					{title}
				</Typography>
			)}

			{menuItems.map((menuItem: any) => (
				<MenuItem
					key={menuItem?.id}
					id={menuItem?.id}
					label={!mobile && menuItem?.name}
					icon={menuItem?.icon}
					link={
						isGenre
							? `/movies/genre/${menuItem?.name
									.toLowerCase()
									.replaceAll(' ', '-')}`
							: menuItem?.link
					}
					active={
						menuItemActive ===
						menuItem?.name?.split(' ')?.join('-').toLowerCase()
					}
					setMenuItemActive={setMenuItemActive}
					disableRipple={mobile}
				/>
			))}
		</Box>
	);
};

export default MenuItemsBlock;
