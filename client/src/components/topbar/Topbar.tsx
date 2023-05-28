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
import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeEnum } from '../../types/enums';
import useStyles from './style';

const Topbar = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();

	const { themeMode, handleThemeMode } = useContext(ThemeContext);

	const [search, setSearch] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleClick = () => navigate(`/search/${search.split(' ').join('-')}`);

	const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			handleClick();
		}
	};

	return (
		<Box sx={styles.root}>
			<Box sx={styles.searchBox}>
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
			</Box>

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
					style={styles.darkModeIcon}
				/>
			</Button>
		</Box>
	);
};

export default Topbar;
