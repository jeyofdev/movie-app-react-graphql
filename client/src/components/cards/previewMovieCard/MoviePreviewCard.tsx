import Tags from '@components/tags/Tags';
import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import VoteAverage from '@components/ui/votes/average/VoteAverage';
import { Box, Typography, useTheme } from '@mui/material';
import { truncate } from '@utils/index';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum } from '../../../types/enums';
import { MoviePreviewCardProps } from '../../../types/types/props';
import useStyles from './style';

const MoviePreviewCard = ({
	backdrop_path,
	title,
	overview,
	genres,
	runtime,
	vote_average,
	stylesBox,
}: MoviePreviewCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();
	const { width } = useWindowSize();

	return (
		<Box sx={{ ...styles.root, ...stylesBox }}>
			<Box sx={styles.imageBox}>
				<Box
					component='img'
					alt={title as string}
					src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
					sx={styles.image}
				/>
			</Box>
			<Box sx={styles.contentBox}>
				<Box sx={styles.titleBox}>
					<Typography variant='h5' sx={styles.title}>
						{title}
					</Typography>

					<VoteAverage voteAverage={vote_average as number} />
				</Box>

				<Tags genres={genres} runtime={runtime} />

				{overview && (
					<Typography variant='body2' sx={styles.overview}>
						{truncate(overview, width < BreakpointEnum.LG ? 50 : 40)}
					</Typography>
				)}

				<BaseButton
					variant='outlined'
					onClick={() => navigate('/')}
					style={styles.button}
				>
					View more
				</BaseButton>
			</Box>
		</Box>
	);
};

export default MoviePreviewCard;
