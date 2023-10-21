import { ThemeContext } from '@context/ThemeContext';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import {
	Box,
	Chip,
	FormControl,
	Input,
	InputAdornment,
	InputLabel,
	Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { Controller } from 'react-hook-form';
import { InputTextPropsType } from '../../../../types/types/props';
import useStyles from './style';

const InputText = ({
	control,
	validation,
	label,
	id,
	name,
	icon,
	placeholder,
	password,
}: InputTextPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { themeMode } = useContext(ThemeContext);

	const [showPassword, setShowPassword] = useState(false);
	const [type, setType] = useState<'text' | 'password'>(
		password ? 'password' : 'text',
	);

	return (
		<Box>
			<Controller
				control={control}
				name={name}
				defaultValue=''
				rules={validation}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<InputLabel shrink={false} htmlFor='bootstrap-input'>
							<Typography variant='h6' sx={styles.labelTypo}>
								{label}
							</Typography>
						</InputLabel>

						<FormControl variant='standard' sx={styles.formControl}>
							<Input
								type={type}
								id={id}
								placeholder={placeholder ?? ''}
								sx={styles.inputText(error)}
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
												icon={!showPassword ? faEyeSlash : faEye}
												color={theme.palette.common.black}
												style={styles.inputIconShowPassword(themeMode)}
												onClick={() => {
													setShowPassword(!showPassword);
													setType(type === 'password' ? 'text' : 'password');
												}}
											/>
										</InputAdornment>
									) : null
								}
							/>

							{error && (
								<Chip
									sx={styles.errorChip}
									color='error'
									label={
										<Typography variant='caption' sx={styles.errorMessage}>
											{error.message}
										</Typography>
									}
								/>
							)}
						</FormControl>
					</>
				)}
			/>
		</Box>
	);
};

export default InputText;
