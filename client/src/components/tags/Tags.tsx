import LinksGenres from '@components/ui/link/linksGenres/LinkGenre';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Genre } from '@graphql/__generated__/graphql-type';
import useTheme from '@hooks/useTheme';
import { Box, Typography } from '@mui/material';
import { formatNumberToHours } from '@utils/index';
import { TagsProps } from '../../types/types/props';
import useStyles from './style';

const Tags = ({ runtime, genres, sx }: TagsProps) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.root}>
			<Box sx={styles.movieInfosBox}>
				{runtime ? (
					<Typography variant='body2' sx={{ ...styles.runtime, ...sx }}>
						{formatNumberToHours(runtime)}
					</Typography>
				) : null}

				{runtime && genres ? (
					<FontAwesomeIcon
						icon={faCircle}
						style={{ ...styles.separatorCircle, ...sx }}
					/>
				) : null}

				{genres && <LinksGenres genres={genres as Array<Genre>} sx={sx} />}
			</Box>
		</Box>
	);
};

export default Tags;
