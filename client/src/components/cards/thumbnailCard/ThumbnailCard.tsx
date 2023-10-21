import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import { ThumbnailCardProps } from '../../../types/types/props';
import useStyles from './style';

const ThumbnailCard = ({ title, poster_path }: ThumbnailCardProps) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Box
				component='img'
				sx={styles.poster}
				alt={title as string}
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
			/>
		</Box>
	);
};

export default ThumbnailCard;
