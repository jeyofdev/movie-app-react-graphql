import Tags from '@components/tags/Tags';
import VoteAverage from '@components/ui/votes/average/VoteAverage';
import { Box, Typography, useTheme } from '@mui/material';
import { DetailsMovieCardProps } from '../../../types/types/props';
import useStyles from './style';

const DetailsMovieCard = ({
	title,
	overview,
	genres,
	runtime,
	vote_average,
	poster_path,
}: DetailsMovieCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<>
			<Box
				component='img'
				sx={styles.poster}
				alt={title as string}
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
			/>
			<Box sx={styles.root}>
				<Typography variant='h2' sx={styles.title}>
					{title}
				</Typography>

				<VoteAverage voteAverage={vote_average as number} hasBackground />

				<Tags genres={genres} runtime={runtime} />

				<Typography variant='body2' sx={styles.overview}>
					{overview}
				</Typography>
			</Box>
		</>
	);
};

export default DetailsMovieCard;
