import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Box,
	FormControl,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
	Typography,
	useTheme,
} from '@mui/material';
import { InputTextPropsType } from '../../../../types/types/props';
import useStyles from './style';

const InputText = ({ label, icon }: InputTextPropsType) => {
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
					id='bootstrap-input'
					placeholder='ex. username@mail.com'
					sx={styles.inputText}
					// value={search}
					// onChange={handleChange}
					// onKeyUp={handleKeyUp}
					disableUnderline
					startAdornment={
						<InputAdornment position='start'>
							<IconButton>
								<FontAwesomeIcon
									icon={icon}
									color={theme.palette.common.black}
									style={styles.inputIcon}
								/>
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
		</Box>
	);
};

export default InputText;
