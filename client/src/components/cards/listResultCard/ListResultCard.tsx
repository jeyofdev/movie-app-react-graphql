import VoteAverage from '@components/ui/votes/average/VoteAverage';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ListResultCardProps } from '../../../types/types/props';
import useStyles from './style';

const ListResultCard = ({
	id,
	title,
	poster_path,
	vote_average,
	cardGridColumn,
}: ListResultCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();

	return (
		<Button
			onClick={() => navigate(`/movie/${id}`)}
			sx={{ ...styles.root, ...cardGridColumn }}
		>
			<Box>
				{poster_path ? (
					<Box
						component='img'
						sx={styles.poster}
						alt={title as string}
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
					/>
				) : (
					<Box sx={styles.noImageBox}>
						<FontAwesomeIcon
							icon={faImage}
							color={theme.palette.primary.contrastText}
							style={styles.noImageIcon}
						/>

						<Typography variant='h5' sx={styles.noImageTypo}>
							No Image
						</Typography>
					</Box>
				)}

				<Box sx={styles.voteAverageBox}>
					<VoteAverage
						voteAverage={vote_average as number}
						typoVariant='body1'
						iconStyle={styles.voteIcon}
						hasBackground
					/>
				</Box>

				<Box sx={styles.contentBox}>
					<Typography key={id} variant='subtitle1' sx={styles.title}>
						{title}
					</Typography>
				</Box>
			</Box>
		</Button>
	);
};

export default ListResultCard;
