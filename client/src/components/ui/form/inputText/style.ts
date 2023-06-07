import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { Theme } from '@mui/material';
import { DarkModeEnum } from '../../../../types/enums';

const useStyles = (theme: Theme) => ({
	formControl: {
		width: '100%',
	},
	inputText: (
		errors?: FieldError | Merge<FieldError, FieldErrorsImpl<never>> | undefined,
	) => ({
		background: 'transparent',
		borderRadius: '7px',
		padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
		border: `1px solid ${theme.palette.grey[300]}`,
		borderColor:
			errors !== undefined && Object.keys(errors).length > 0
				? theme.palette.error.main
				: theme.palette.grey[300],
		color: theme.palette.primary.main,
		gap: '1rem',
	}),
	inputIcon: {
		color: theme.palette.grey[300],
		fontSize: '1.25rem',
	},
	labelTypo: {
		color: theme.palette.primary.main,
	},
	inputIconShowPassword: (darkMode: DarkModeEnum) => ({
		color:
			darkMode === DarkModeEnum.DARK
				? theme.palette.grey[300]
				: theme.palette.grey[600],
		fontSize: '0.85rem',
		cursor: 'pointer',
	}),
	errorChip: {
		width: 'fit-content',
		marginTop: theme.spacing(0.5),
		height: '18px',
	},
	errorMessage: {
		color: theme.palette.error.contrastText,
	},
});

export default useStyles;
