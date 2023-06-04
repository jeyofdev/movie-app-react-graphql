import { Button, Typography, useTheme } from '@mui/material';
import { RedirectWithTextButtonPropsType } from '../../../../types/types/props';
import useStyles from './style';

const RedirectWithTextButton = ({
	content,
	labelBtn,
	onClick,
}: RedirectWithTextButtonPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<>
			{content ? (
				<Typography variant='body2' sx={styles.content}>
					{content}{' '}
					<Button sx={styles.btnRedirect} disableRipple onClick={onClick}>
						{labelBtn}
					</Button>
				</Typography>
			) : (
				<Button sx={styles.btnRedirect} disableRipple onClick={onClick}>
					{labelBtn}
				</Button>
			)}
		</>
	);
};

export default RedirectWithTextButton;
