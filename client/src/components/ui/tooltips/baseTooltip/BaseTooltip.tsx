import { Tooltip, TooltipProps, styled, tooltipClasses } from '@mui/material';

const BaseTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: theme.palette.primary.main,
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		fontSize: '0.8rem',
	},
}));

export default BaseTooltip;
