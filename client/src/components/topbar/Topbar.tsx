import SignInModal from '@components/modals/signInModal/SignInModal';

import SignUpModal from '@components/modals/signupModal/SignUpModal';
import Logo from '@components/ui/logo/Logo';
import SelectLang from '@components/ui/selectLang/SelectLang';
import UserMenu from '@components/ui/userMenu/UserMenu';
import { ThemeContext } from '@context/ThemeContext';
import {
	faMagnifyingGlass,
	faMoon,
	faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSearchMovie from '@hooks/useSearchMovie';
import useTheme from '@hooks/useTheme';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import {
	Box,
	Button,
	FormControl,
	IconButton,
	Input,
	InputAdornment,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum, DarkModeEnum } from '../../types/enums';
import { TopBarPropsType } from '../../types/types/props';
import useStyles from './style';

const Topbar = ({ landing }: TopBarPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();
	useLingui();

	const { themeMode, handleThemeMode } = useContext(ThemeContext);

	const [showSearchBtnMobile, setShowSearchBtnMobile] =
		useState<boolean>(false);
	const [showInputSearch, setShowInputSearch] = useState<boolean>(false);
	const [showModalSignUp, setShowModalSignUp] = useState<boolean>(false);
	const [showModalSignIn, setShowModalSignIn] = useState<boolean>(false);
	const [signInStep, setSignInStep] = useState<number>(0);
	const [logInStep, setLogInStep] = useState<number>(0);

	const { search, onChange, onClick, onKeyUp } = useSearchMovie(
		setShowSearchBtnMobile,
		setShowInputSearch,
	);

	useEffect(() => {
		if (width > BreakpointEnum.SM) {
			setShowInputSearch(true);
			setShowSearchBtnMobile(false);
		} else {
			setShowInputSearch(false);
			setShowSearchBtnMobile(true);
		}
	}, [width]);

	return (
		<>
			<Box sx={styles.root}>
				{landing && <Logo landing />}

				{!landing && (
					<Box sx={styles.searchBox}>
						{showSearchBtnMobile && (
							<>
								<Button
									color='primary'
									onClick={() => {
										setShowInputSearch(!showInputSearch);
										setShowSearchBtnMobile(false);
									}}
									sx={styles.darkModeBtn}
								>
									<FontAwesomeIcon
										icon={faMagnifyingGlass}
										color={theme.palette.primary.contrastText}
										style={styles.searchIcon}
									/>
								</Button>
							</>
						)}

						{showInputSearch && (
							<FormControl
								sx={styles.searchFormControl(themeMode)}
								variant='standard'
							>
								<Input
									sx={styles.searchInput}
									type={'text'}
									placeholder={t`Search movie...`}
									value={search}
									onChange={onChange}
									onKeyUp={onKeyUp}
									disableUnderline
									endAdornment={
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={onClick}
												disabled={search.length <= 0}
											>
												<FontAwesomeIcon
													icon={faMagnifyingGlass}
													color={
														search.length <= 0
															? theme.palette.grey[300]
															: theme.palette.common.black
													}
													style={styles.searchIcon}
												/>
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>
						)}
					</Box>
				)}

				<Box sx={styles.LinksBox(landing ?? false)}>
					<SelectLang />
					<Button
						color='primary'
						onClick={() => {
							handleThemeMode();
						}}
						sx={styles.darkModeBtn}
					>
						<FontAwesomeIcon
							icon={themeMode === DarkModeEnum.DARK ? faSun : faMoon}
							color={theme.palette.primary.contrastText}
							style={styles.icon}
						/>
					</Button>

					<UserMenu
						onClickLogin={() => {
							setShowModalSignIn(true);
							setLogInStep(1);
						}}
						onClickSignUp={() => {
							setShowModalSignUp(true);
							setSignInStep(1);
						}}
					/>
				</Box>
			</Box>

			<SignUpModal
				open={showModalSignUp}
				setOpen={setShowModalSignUp}
				step={signInStep}
				setStep={setSignInStep}
				title={{
					stepOne: t`Sign up`,
					stepTwo: t`Finish Signing up`,
				}}
				onRedirect={() => {
					setShowModalSignIn(true);
					setShowModalSignUp(false);
				}}
			/>

			<SignInModal
				open={showModalSignIn}
				setOpen={setShowModalSignIn}
				step={logInStep}
				setStep={setLogInStep}
				title={{
					stepOne: t`Login`,
					stepTwo: t`Forgot your password ?`,
				}}
				onRedirect={() => {
					setShowModalSignUp(true);
					setShowModalSignIn(false);
				}}
			/>

			<ToastContainer />
		</>
	);
};

export default Topbar;
