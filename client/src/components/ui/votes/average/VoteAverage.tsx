import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography, useTheme } from '@mui/material';
import { VoteAverageProps } from '../../../../types/types/props';
import useStyles from './style';

const VoteAverage = ({
	voteAverage,
	typoStyle,
	typoVariant,
	iconStyle,
}: VoteAverageProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<FontAwesomeIcon
				icon={faStar}
				style={{ ...styles.voteStar, ...iconStyle }}
			/>
			<Typography
				variant={typoVariant ?? 'subtitle2'}
				sx={{ ...styles.vote, ...typoStyle }}
			>
				{voteAverage?.toFixed(1)}
			</Typography>
		</Box>
	);
};

export default VoteAverage;
