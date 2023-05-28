import { Box, Typography, useTheme } from '@mui/material';
import { truncate } from '@utils/index';
import { format } from 'date-fns';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum } from '../../../types/enums';
import { SearchResultMovieCardProps } from '../../../types/types/props';
import useStyles from './style';

const SearchResultMovieCard = ({
	title,
	poster_path,
	overview,
	release_date,
}: SearchResultMovieCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();

	const formatDate = (date: string) => {
		const newDate = new Date(date);
		return format(newDate, 'MMMM dd, yyyy');
	};

	return (
		<Box sx={styles.root}>
			<Box
				component='img'
				sx={styles.poster}
				alt={title as string}
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
			/>

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
		</Box>
	);
};

export default SearchResultMovieCard;
