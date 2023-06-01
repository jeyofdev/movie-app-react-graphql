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
import { InputTextPropsType } from '../../../../types/types/props';
import useStyles from './style';

const InputText = ({
	label,
	id,
	name,
	icon,
	value,
	onChange,
}: InputTextPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box>
			<InputLabel shrink={false} htmlFor='bootstrap-input'>
				<Typography variant='h6' sx={styles.labelTypo}>
					{label}
				</Typography>
			</InputLabel>

			<FormControl variant='standard' sx={styles.formControl}>
				<Input
					type='text'
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
				/>
			</FormControl>
		</Box>
	);
};

export default InputText;
