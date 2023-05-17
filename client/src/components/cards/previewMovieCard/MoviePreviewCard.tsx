import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
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
	stylesBox,
}: MoviePreviewCardProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();

	return (
		<Box sx={{ ...styles.root, ...stylesBox }}>
			<Box
				component='img'
				alt={title as string}
				src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
				sx={styles.image}
			/>
			<Box sx={styles.contentBox}>
				<Typography variant='h5' sx={styles.title}>
					{title}
				</Typography>

				<Box>
					{genres && genres?.length > 0 && (
						<Box sx={styles.genresBox}>
							{genres.map(genre => (
								<BaseButton
									key={genre?.id}
									style={styles.genreButton}
									disableRipple
									onClick={() =>
										navigate(
											`/${genre?.name.toLowerCase().split(' ').join('-')}`,
										)
									}
								>
									{genre?.name},
								</BaseButton>
							))}
						</Box>
					)}
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
