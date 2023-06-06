import ImageThumb from '@components/ui/images/imageThumb/ImageThumb';
import VoteAverage from '@components/ui/votes/average/VoteAverage';
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
				<ImageThumb
					src={poster_path as string}
					imageAlt={title as string}
					noImageBoxStyle={{ ...styles.poster, ...styles.noImageBox }}
					posterStyle={styles.poster}
				/>

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
