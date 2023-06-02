import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	FormControl,
	Input,
	InputAdornment,
	InputLabel,
	Typography,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { InputTextPropsType } from '../../../../types/types/props';
import useStyles from './style';

const InputText = ({
	label,
	id,
	name,
	icon,
	password,
	value,
	onChange,
}: InputTextPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const [showPassword, setShowPassword] = useState(false);
	const [type, setType] = useState<'text' | 'password'>('text');

	return (
		<Box>
			<InputLabel shrink={false} htmlFor='bootstrap-input'>
				<Typography variant='h6' sx={styles.labelTypo}>
					{label}
				</Typography>
			</InputLabel>

			<FormControl variant='standard' sx={styles.formControl}>
				<Input
					type={type}
					id={id}
					name={name}
					placeholder='ex. username@mail.com'
					sx={styles.inputText}
					value={value}
					onChange={onChange}
					disableUnderline
					startAdornment={
						<InputAdornment position='start'>
							<FontAwesomeIcon
								icon={icon}
								color={theme.palette.common.black}
								style={styles.inputIcon}
							/>
						</InputAdornment>
					}
					endAdornment={
						password ? (
							<InputAdornment position='end'>
								<FontAwesomeIcon
									icon={showPassword ? faEyeSlash : faEye}
									color={theme.palette.common.black}
									style={styles.inputIconShowPassword}
									onClick={() => {
										setShowPassword(!showPassword);
										setType(type === 'password' ? 'text' : 'password');
									}}
								/>
							</InputAdornment>
						) : null
					}
				/>
			</FormControl>
		</Box>
	);
};

export default InputText;
