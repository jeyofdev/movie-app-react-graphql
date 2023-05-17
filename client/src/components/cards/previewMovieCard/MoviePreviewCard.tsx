import { Box, Typography, useTheme } from '@mui/material';
import { truncate } from '@utils/index';
import { MoviePreviewCardProps } from '../../../types/types/props';
import useStyles from './style';

const MoviePreviewCard = ({
	backdrop_path,
	title,
	overview,
	stylesBox,
}: MoviePreviewCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={{ ...styles.root, ...stylesBox }}>
			<Box
				component='img'
				alt={title as string}
				src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
				sx={styles.image}
			/>
			<Box sx={styles.contentBox}>
				<Typography variant='h5' sx={styles.title}>
					{title}
				</Typography>

				{overview && (
					<Typography variant='body2' sx={styles.overview}>
						{truncate(overview as string, 30)}
					</Typography>
				)}
			</Box>
		</Box>
	);
};

export default MoviePreviewCard;
