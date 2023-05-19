import Tags from '@components/tags/Tags';
import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import { Box, Typography, useTheme } from '@mui/material';
import { truncate } from '@utils/index';
import { useNavigate } from 'react-router-dom';
import { SelectedThumbsGalleryCardProps } from '../../../types/types/props';
import useStyles from './style';

const SelectedThumbsGalleryCard = ({
	title,
	genres,
	runtime,
	overview,
}: SelectedThumbsGalleryCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();

	return (
		<Box style={styles.root as object}>
			<Box>
				<Typography variant='h4' sx={styles.title}>
					{title}
				</Typography>

				<Tags genres={genres} runtime={runtime} />

				{overview && (
					<Typography variant='body2' sx={styles.overview}>
						{truncate(overview as string, 40)}
					</Typography>
				)}
			</Box>

			<Box>
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

export default SelectedThumbsGalleryCard;
