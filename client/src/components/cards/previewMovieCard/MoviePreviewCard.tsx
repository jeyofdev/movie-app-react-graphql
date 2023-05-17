import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography, useTheme } from '@mui/material';
import { truncate } from '@utils/index';
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

	const generateGenreLink = () =>
		genres &&
		genres?.length > 0 && (
			<Box sx={styles.genresBox}>
				{genres.map((genre, i) => (
					<>
						<BaseButton
							key={genre?.id}
							style={styles.genreButton}
							disableRipple
							onClick={() =>
								navigate(`/${genre?.name.toLowerCase().split(' ').join('-')}`)
							}
						>
							{genre?.name}
						</BaseButton>
						{genres.length !== i + 1 && (
							<span style={{ color: theme.palette.primary.main }}>,&nbsp;</span>
						)}
					</>
				))}
			</Box>
		);

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

					<Box sx={styles.votesBox}>
						<FontAwesomeIcon icon={faStar} style={styles.voteStar} />
						<Typography variant='subtitle2' sx={styles.vote}>
							{vote_average?.toFixed(1)}
						</Typography>
					</Box>
				</Box>

				<Box>
					<Box sx={styles.movieInfosBox}>
						{runtime && (
							<Typography variant='body2' sx={styles.runtime}>
								1h50min
							</Typography>
						)}

						<FontAwesomeIcon icon={faCircle} style={styles.separatorCircle} />
						{generateGenreLink()}
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
