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
			{/* <Box style={styles.mask as object} /> */}
			<Box
				component='img'
				sx={styles.poster}
				alt={title as string}
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
			/>
			<Box sx={styles.contentBox}>
				<Typography variant='h2' sx={styles.title}>
					{title}
					<Box sx={{ display: 'flex' }}>
						<VoteAverage voteAverage={vote_average as number} hasBackground />
					</Box>
				</Typography>

				<Tags genres={genres} runtime={runtime} />

				<Typography variant='body2' sx={styles.overview}>
					{overview}
				</Typography>
			</Box>

			<Box sx={styles.swipersBox}>
				{/* <RoundedSwiper list={cast} /> */}
				<SwiperSection swiperType='person' title='Cast' list={cast} />
			</Box>
		</Box>
	);
};

export default DetailsMovieCard;
