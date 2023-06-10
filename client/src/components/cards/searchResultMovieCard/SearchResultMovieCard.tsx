import ImageThumb from '@components/ui/images/imageThumb/ImageThumb';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { truncate } from '@utils/index';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum } from '../../../types/enums';
import { SearchResultMovieCardProps } from '../../../types/types/props';
import useStyles from './style';

const SearchResultMovieCard = ({
	id,
	title,
	poster_path,
	overview,
	release_date,
}: SearchResultMovieCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();
	const navigate = useNavigate();

	const formatDate = (date: string) => {
		const newDate = new Date(date);
		return format(newDate, 'MMMM dd, yyyy');
	};

	return (
		<Button onClick={() => navigate(`/movie/${id}`)} sx={styles.root}>
			{/* <Box
				component='img'
				sx={styles.poster}
				alt={title as string}
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
			/> */}

			<Box>
				<ImageThumb
					src={poster_path as string}
					imageAlt={title as string}
					noImageBoxStyle={{ ...styles.poster, ...styles.noImageBox }}
					posterStyle={styles.poster}
				/>
			</Box>
			<Box sx={styles.contentBox}>
				<Typography variant='h5' sx={styles.title}>
					{title}
				</Typography>

				{release_date && (
					<Typography variant='body1' sx={styles.releaseDate}>
						{formatDate(release_date as string)}
					</Typography>
				)}

				{overview && width >= BreakpointEnum.SM && (
					<Typography variant='body2' sx={styles.overview}>
						{truncate(overview, width < BreakpointEnum.LG ? 20 : 30)}
					</Typography>
				)}
			</Box>
		</Button>
	);
};

export default SearchResultMovieCard;
