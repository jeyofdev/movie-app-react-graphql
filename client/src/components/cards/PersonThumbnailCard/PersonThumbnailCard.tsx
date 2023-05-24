import { Box, useTheme } from '@mui/material';
import { PersonThumbnailCardProps } from '../../../types/types/props';
import useStyles from './style';

const PersonThumbnailCard = ({
	name,
	profile_path,
}: PersonThumbnailCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Box
				component='img'
				sx={styles.poster}
				alt={name as string}
				src={`https://image.tmdb.org/t/p/w500${profile_path}`}
			/>
		</Box>
	);
};

export default PersonThumbnailCard;
