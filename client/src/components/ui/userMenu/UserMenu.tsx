import UserMenuItem from '@components/items/userMenuItem/UserMenuItem';
import { ThemeContext } from '@context/ThemeContext';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Divider, Menu, useTheme } from '@mui/material';
import { logOut } from '@services/auth';
import { auth } from '@services/firebase';
import { MouseEvent, useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserMenuPropsType } from '../../../types/types/props';
import useStyles from './style';

const UserMenu = ({ onClickLogin, onClickSignUp }: UserMenuPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const [user] = useAuthState(auth);
	const { themeMode } = useContext(ThemeContext);

	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<Button
				color='primary'
				onClick={handleOpenUserMenu}
				sx={styles.userIconBtn}
			>
				<FontAwesomeIcon
					icon={faUser}
					color={theme.palette.primary.contrastText}
					style={styles.topIcon}
				/>
			</Button>

			<Menu
				sx={styles.menu}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{!user ? (
					<Box sx={styles.menuItemsBox}>
						<UserMenuItem
							label='Log in'
							onClick={e => {
								onClickLogin(e);
								handleCloseUserMenu();
							}}
						/>

						<Divider sx={styles.divider(themeMode)} />

						<UserMenuItem
							label='Sign up'
							onClick={e => {
								onClickSignUp(e);
								handleCloseUserMenu();
							}}
						/>
					</Box>
				) : (
					<Box>
						<UserMenuItem
							label='Log out'
							onClick={() => {
								logOut();
								handleCloseUserMenu();
							}}
						/>
					</Box>
				)}
			</Menu>
		</>
	);
};

export default UserMenu;
