import Tags from '@components/tags/Tags';
import { Typography, useTheme } from '@mui/material';
import { SelectedThumbsGalleryCardProps } from '../../../types/types/props';
import useStyles from './style';

const SelectedThumbsGalleryCard = ({
	title,
	genres,
	runtime,
}: SelectedThumbsGalleryCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<>
			<Typography variant='h4' sx={styles.title}>
				{title}
			</Typography>

			<Tags genres={genres} runtime={runtime} />
		</>
	);
};

export default SelectedThumbsGalleryCard;
