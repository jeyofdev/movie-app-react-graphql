import { ThemeContext } from '@context/ThemeContext';
import { TranslationContext } from '@context/TranslationContext';
import { LanguageEnum } from '@graphql/__generated__/graphql-type';
import useTheme from '@hooks/useTheme';
import { t } from '@lingui/macro';
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useStyles from './style';

import { ReactComponent as England } from '../../../assets/flags/england.svg';
import { ReactComponent as France } from '../../../assets/flags/france.svg';
import { ReactComponent as Germany } from '../../../assets/flags/germany.svg';
import { ReactComponent as Spain } from '../../../assets/flags/spain.svg';

const countries = [
	{ id: uuidv4(), label: t`English`, locale: LanguageEnum.En },
	{ id: uuidv4(), label: t`French`, locale: LanguageEnum.Fr },
	{ id: uuidv4(), label: t`Spanish`, locale: LanguageEnum.Es },
	{ id: uuidv4(), label: t`German`, locale: LanguageEnum.De },
];

const SelectLang = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { themeMode } = useContext(ThemeContext);
	const { currentLocale, handleLocale } = useContext(TranslationContext);

	const [open, setOpen] = useState(false);

	const getLocale = (locale: string) => {
		switch (locale) {
			case 'en':
				return LanguageEnum.En;
			case 'fr':
				return LanguageEnum.Fr;
			case 'es':
				return LanguageEnum.Es;
			case 'de':
				return LanguageEnum.De;

			default:
				return LanguageEnum.En;
		}
	};

	const handleChange = (e: SelectChangeEvent) => {
		handleLocale(e.target.value as LanguageEnum);
		localStorage.setItem('locale', getLocale(e.target.value));
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	useEffect(() => {}, [currentLocale]);

	const getFlag = (locale: string) => {
		switch (locale) {
			case 'fr':
				return <France style={styles.flag} />;
			case 'en':
				return <England style={styles.flag} />;
			case 'es':
				return <Spain style={styles.flag} />;
			case 'de':
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
					value={currentLocale}
					name='lang'
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

export default SelectLang;
