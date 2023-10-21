import Logo from '@components/ui/logo/Logo';
import { ThemeContext } from '@context/ThemeContext';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import {} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useContext, useState } from 'react';
import { SidebarResponsivePropsTypes } from '../../../types/types/props';
import MenuItemsBlock from '../menuItemsBlock/MenuItemsBlock';
import useStyles from './style';

const SidebarResponsive = ({
	menuItems,
	menuItemActive,
	setMenuItemActive,
}: SidebarResponsivePropsTypes) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const [open, setOpen] = useState<boolean>(false);
	const { themeMode } = useContext(ThemeContext);

	return (
		<AppBar position='fixed' sx={styles.appBar}>
			<Toolbar sx={styles.toolbar}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					onClick={() => setOpen(true)}
				>
					<FontAwesomeIcon
						icon={faBars}
						color={theme.palette.primary.main}
						style={styles.openIcon}
					/>
				</IconButton>

				<Drawer
					anchor='left'
					open={open}
					onClose={() => setOpen(false)}
					sx={styles.menuRoot}
				>
					<Box sx={styles.menuBox}>
						<Box sx={styles.boxTop}>
							<IconButton sx={styles.iconBtn} onClick={() => setOpen(false)}>
								<FontAwesomeIcon
									icon={faTimes}
									color={theme.palette.primary.main}
									style={styles.closeIcon}
								/>
							</IconButton>

							<Logo stylesBox={{ marginTop: 0 }} />
						</Box>

						<Divider sx={styles.divider(themeMode)} />

						<MenuItemsBlock
							menuItems={menuItems}
							menuItemActive={menuItemActive as string}
							setMenuItemActive={setMenuItemActive}
							boxStyles={styles.menuItemBox}
							setCloseMenuMobile={() => setOpen(false)}
						/>
					</Box>
				</Drawer>
			</Toolbar>
		</AppBar>
	);
};

export default SidebarResponsive;
