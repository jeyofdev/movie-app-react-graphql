import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import LinksGenres from '@components/ui/link/linksGenres/LinkGenre';
import VoteAverage from '@components/ui/votes/average/VoteAverage';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Genre } from '@graphql/__generated__/graphql-type';
import { Box, Typography, useTheme } from '@mui/material';
import { formatNumberToHours, truncate } from '@utils/index';
import { useNavigate } from 'react-router-dom';
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

				<Box>
					<Box sx={styles.movieInfosBox}>
						{runtime && (
							<Typography variant='body2' sx={styles.runtime}>
								{formatNumberToHours(runtime)}
							</Typography>
						)}

						<FontAwesomeIcon icon={faCircle} style={styles.separatorCircle} />
						<LinksGenres genres={genres as Array<Genre>} />
					</Box>
				</Box>

				{overview && (
					<Typography variant='body2' sx={styles.overview}>
						{truncate(overview, 30)}
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
