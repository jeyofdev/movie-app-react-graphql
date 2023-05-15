import { Button } from '@mui/material';
import { BaseButtonPropsType } from '../../../../types/types/props';
import useStyles from './style';

const BaseButton = ({
	onClick,
	style,
	active,
	children,
}: BaseButtonPropsType) => {
	const styles = useStyles();

	return (
		<Button
			onClick={onClick}
			sx={{ ...styles.root, ...style }}
			className={active ? 'active' : ''}
		>
			{children}
		</Button>
	);
};

export default BaseButton;
