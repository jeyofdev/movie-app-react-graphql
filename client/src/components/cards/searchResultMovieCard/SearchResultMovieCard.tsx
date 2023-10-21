import ImageThumb from '@components/ui/images/imageThumb/ImageThumb';
import { TranslationContext } from '@context/TranslationContext';
import useTheme from '@hooks/useTheme';
import { Box, Button, Typography } from '@mui/material';
import { formatDate, truncate } from '@utils/index';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum, RoutesEnum } from '../../../types/enums';
import { SearchResultMovieCardProps } from '../../../types/types/props';
import useStyles from './style';

const SearchResultMovieCard = ({
	id,
	title,
	poster_path,
	overview,
	release_date,
}: SearchResultMovieCardProps) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();
	const navigate = useNavigate();
	const { currentLocale } = useContext(TranslationContext);

	return (
		<Button
			onClick={() => navigate(`/${RoutesEnum.MOVIE}/${id}`)}
			sx={styles.root}
		>
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
						{formatDate(release_date as string, currentLocale)}
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
