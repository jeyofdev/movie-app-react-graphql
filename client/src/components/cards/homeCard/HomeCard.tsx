import ImageThumb from '@components/ui/images/imageThumb/ImageThumb';
import useTheme from '@hooks/useTheme';
import { Box } from '@mui/material';
import { HomeCardProps } from '../../../types/types/props';
import useStyles from './style';

const HomeCard = ({ title, poster_path, boxStyles }: HomeCardProps) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={{ ...styles.root, ...boxStyles }}>
			<ImageThumb
				src={poster_path as string}
				imageAlt={title as string}
				posterStyle={styles.poster}
			/>
		</Box>
	);
};

export default HomeCard;
