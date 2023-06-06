import SwiperSection from '@components/sections/swiperBlock/SwiperSection';
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
	backdrop_path,
	cast,
}: DetailsMovieCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root(backdrop_path as string)}>
			<Box sx={styles.content}>
				{vote_average && (
					<Box sx={styles.voteBox}>
						<VoteAverage voteAverage={vote_average as number} hasBackground />
					</Box>
				)}
				<Box
					component='img'
					sx={styles.poster}
					alt={title as string}
					src={`https://image.tmdb.org/t/p/w500${poster_path}`}
				/>
				<Box sx={styles.contentBox}>
					<Typography variant='h4' sx={styles.title}>
						{title}
					</Typography>

					<Tags
						genres={genres}
						runtime={runtime}
						sx={{ color: theme.palette.common.white }}
					/>

					{overview && (
						<Typography variant='body2' sx={styles.overview}>
							{overview}
						</Typography>
					)}

					{cast && (
						<SwiperSection
							swiperType='person'
							title='Cast'
							list={cast}
							titleStyle={{ color: theme.palette.common.white }}
						/>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default DetailsMovieCard;
