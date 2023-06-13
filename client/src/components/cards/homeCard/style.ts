import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		borderRadius: '0.625rem',
		overflow: 'hidden',
		border: `2px solid ${theme.palette.primary.main}`,
		backgroundColor: theme.palette.primary.main,
		width: 'fit-content',

		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	poster: {
		width: '100%',
		height: {
			xs: '180px',
			sm: '260px',
			md: '260px',
			lg: '360px',
			xl: '360px',
		},
		backgroundSize: 'contain',
	},
});

export default useStyles;
