import SwiperSection from '@components/sections/swiperBlock/SwiperSection';
import Tags from '@components/tags/Tags';
import ImageThumb from '@components/ui/images/imageThumb/ImageThumb';
import VoteAverage from '@components/ui/votes/average/VoteAverage';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
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
	useLingui();

	return (
		<Box sx={styles.root(backdrop_path as string)}>
			<Box sx={styles.content}>
				{vote_average ? (
					<Box sx={styles.voteBox}>
						<VoteAverage voteAverage={vote_average as number} hasBackground />
					</Box>
				) : null}

				<ImageThumb
					src={poster_path as string}
					imageAlt={title as string}
					noImageBoxStyle={{ ...styles.poster, ...styles.noImageBox }}
					posterStyle={styles.poster}
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

					{overview ? (
						<Typography variant='body2' sx={styles.overview}>
							{overview}
						</Typography>
					) : null}

					{cast ? (
						<Box
							sx={{
								position: 'relative',
								display: 'grid',
								gridTemplateColumns: 'repeat(12, 1fr)',
								gap: theme.spacing(1),
							}}
						>
							<SwiperSection
								swiperType='person'
								title={t`Cast`}
								list={cast}
								titleStyle={{ color: theme.palette.common.white }}
								swiperBoxStyle={styles.swiperBox}
							/>
						</Box>
					) : null}
				</Box>
			</Box>
		</Box>
	);
};

export default DetailsMovieCard;
