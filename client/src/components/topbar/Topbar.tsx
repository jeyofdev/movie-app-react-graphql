import SignInModal from '@components/modals/signInModal/SignInModal';
import SignUpModal from '@components/modals/signUpModal/SignUpModal';
import { ThemeContext } from '@context/ThemeContext';
import {
	faMagnifyingGlass,
	faMoon,
	faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	Button,
	FormControl,
	IconButton,
	Input,
	InputAdornment,
	useTheme,
} from '@mui/material';
import {
	ChangeEvent,
	KeyboardEvent,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum, DarkModeEnum } from '../../types/enums';
import useStyles from './style';

const Topbar = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();
	const { width } = useWindowSize();

	const { themeMode, handleThemeMode } = useContext(ThemeContext);

	const [search, setSearch] = useState<string>('');
	const [showSearchBtnMobile, setShowSearchBtnMobile] =
		useState<boolean>(false);
	const [showInputSearch, setShowInputSearch] = useState<boolean>(false);
	const [showModalSignUp, setShowModalSignUp] = useState<boolean>(false);
	const [showModalSignIn, setShowModalSignIn] = useState<boolean>(false);
	const [signInStep, setSignInStep] = useState<number>(0);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleClick = () => {
		navigate(`/search/${search.split(' ').join('-')}`);
		setSearch('');
		setShowSearchBtnMobile(true);
		setShowInputSearch(false);
	};

	const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			handleClick();
		}
	};

	useEffect(() => {
		if (width < BreakpointEnum.SM && !showInputSearch) {
			setShowSearchBtnMobile(true);
		} else {
			setShowSearchBtnMobile(false);
		}

		if (width >= BreakpointEnum.SM) {
			setShowInputSearch(true);
		}
	}, [showInputSearch, width]);

	return (
		<>
			<Box sx={styles.root}>
				<Box sx={styles.searchBox}>
					{showSearchBtnMobile && (
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
					)}

					{showInputSearch && (
						<FormControl
							sx={styles.searchFormControl(themeMode)}
							variant='standard'
						>
							<Input
								sx={styles.searchInput}
								type={'text'}
								placeholder='Search movie...'
								value={search}
								onChange={handleChange}
								onKeyUp={handleKeyUp}
								disableUnderline
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClick}
										>
											<FontAwesomeIcon
												icon={faMagnifyingGlass}
												color={theme.palette.common.black}
												style={styles.searchIcon}
											/>
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					)}
				</Box>
				<Box sx={styles.LinksBox}>
					<Button
						variant='outlined'
						onClick={() => {
							setShowModalSignIn(true);
						}}
					>
						Log in
					</Button>

					<Button
						variant='outlined'
						onClick={() => {
							setShowModalSignUp(true);
							setSignInStep(1);
						}}
					>
						Sign up
					</Button>

					<Button
						color='primary'
						onClick={() => {
							handleThemeMode();
						}}
						sx={styles.darkModeBtn}
					>
						<FontAwesomeIcon
							icon={themeMode === DarkModeEnum.DARK ? faMoon : faSun}
							color={theme.palette.primary.contrastText}
							style={styles.icon}
						/>
					</Button>
				</Box>
			</Box>

			<SignUpModal
				open={showModalSignUp}
				setOpen={setShowModalSignUp}
				step={signInStep}
				setStep={setSignInStep}
				title={{
					stepOne: 'Sign up',
					stepTwo: 'Finish Signing up',
				}}
			/>

			<SignInModal
				open={showModalSignIn}
				setOpen={setShowModalSignIn}
				title={'Log in'}
			/>
		</>
	);
};

export default Topbar;
