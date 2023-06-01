import SignUpModal from '@components/modals/signupModal/SignUpModal';
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
	Typography,
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
							setShowModalSignUp(true);
						}}
					>
						Open alert dialog
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
				setOpen={() => setShowModalSignUp(false)}
			>
				<Typography variant='body1'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
					ut, harum modi ex, voluptatum ea quis autem odit quibusdam earum enim
					expedita accusamus pariatur rerum quasi. Unde non eos velit.
				</Typography>
			</SignUpModal>
		</>
	);
};

export default Topbar;
