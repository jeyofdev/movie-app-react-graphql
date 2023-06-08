import { ThemeContext } from '@context/ThemeContext';
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	useTheme,
} from '@mui/material';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useStyles from './style';

import { ReactComponent as England } from '../../../assets/flags/england.svg';
import { ReactComponent as France } from '../../../assets/flags/france.svg';
import { ReactComponent as Germany } from '../../../assets/flags/germany.svg';
import { ReactComponent as Spain } from '../../../assets/flags/spain.svg';
import { ReactComponent as UnitedState } from '../../../assets/flags/united-state.svg';

const countries = [
	{ id: uuidv4(), label: 'France', locale: 'fr_FR' },
	{ id: uuidv4(), label: 'England', locale: 'en_EN' },
	{ id: uuidv4(), label: 'United State', locale: 'en_US' },
	{ id: uuidv4(), label: 'Spain', locale: 'es_ES' },
	{ id: uuidv4(), label: 'Germany', locale: 'de_DE' },
];

const SelectCountry = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { themeMode } = useContext(ThemeContext);

	const [country, setCountry] = useState('en_EN');
	const [open, setOpen] = useState(false);

	const handleChange = (e: SelectChangeEvent) => {
		setCountry(e.target.value as string);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const getFlag = (locale: string) => {
		switch (locale) {
			case 'fr_FR':
				return <France style={styles.flag} />;
			case 'en_EN':
				return <England style={styles.flag} />;
			case 'en_US':
				return <UnitedState style={styles.flag} />;
			case 'es_ES':
				return <Spain style={styles.flag} />;
			case 'de_DE':
				return <Germany style={styles.flag} />;

			default:
				return null;
		}
	};

	return (
		<Box>
			<FormControl sx={styles.formControl}>
				<InputLabel htmlFor='open-select' />
				<Select
					variant='outlined'
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={country}
					name='country'
					onChange={handleChange}
					inputProps={{
						id: 'open-select',
					}}
					MenuProps={{
						PaperProps: {
							sx: styles.menuList(themeMode),
						},
					}}
					sx={styles.select}
				>
					{countries?.map(item => (
						<MenuItem
							key={item.id}
							value={item.locale}
							sx={styles.menuItem(themeMode)}
							disableRipple
						>
							{getFlag(item.locale)}
							{/* <Typography variant='h6' sx={styles.typo}>
								{item.label}
							</Typography> */}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectCountry;
