import UserMenuItem from '@components/items/userMenuItem/UserMenuItem';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, Menu, useTheme } from '@mui/material';
import { logOut } from '@services/auth';
import { auth } from '@services/firebase';
import { MouseEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserMenuPropsType } from '../../../types/types/props';
import useStyles from './style';

const UserMenu = ({ onClickLogin, onClickSignUp }: UserMenuPropsType) => {
	const theme = useTheme();
	const styles = useStyles();
	const [user] = useAuthState(auth);

	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<>
			<IconButton onClick={handleOpenUserMenu}>
				<FontAwesomeIcon
					icon={faCircleUser}
					color={theme.palette.primary.main}
					style={styles.topIcon}
				/>
			</IconButton>

			<Menu
				sx={{ mt: '45px' }}
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
					<Box>
						<UserMenuItem
							label='Log in'
							onClick={e => {
								onClickLogin(e);
								handleCloseUserMenu();
							}}
						/>
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
