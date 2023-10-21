import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import VoteAverage from '@components/ui/votes/average/VoteAverage';
import useTheme from '@hooks/useTheme';
import { Trans } from '@lingui/macro';
import { Box, Typography } from '@mui/material';
import { truncate } from '@utils/index';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum, RoutesEnum } from '../../../types/enums';
import { SelectedThumbsGalleryCardProps } from '../../../types/types/props';
import useStyles from './style';

const SelectedThumbsGalleryCard = ({
	id,
	title,
	// genres,
	// runtime,
	overview,
	vote_average,
}: SelectedThumbsGalleryCardProps) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();
	const { width } = useWindowSize();

	return (
		<Box style={styles.root as object}>
			<Box sx={styles.contentBox}>
				<Box sx={styles.contentTop}>
					<Typography variant='h4' sx={{ ...styles.title, ...styles.zIndex }}>
						{title}
					</Typography>

					<Box sx={styles.zIndex}>
						<VoteAverage
							voteAverage={vote_average as number}
							typoStyle={styles.voteAverage}
							hasBackground
						/>
					</Box>
				</Box>

				{/* <Tags genres={genres} runtime={runtime} sx={styles.voteAverage} /> */}

				{overview && (
					<Typography
						variant='body2'
						sx={{ ...styles.overview, ...styles.zIndex }}
					>
						{truncate(overview as string, width >= BreakpointEnum.SM ? 40 : 30)}
					</Typography>
				)}
			</Box>

			<Box>
				<BaseButton
					variant='contained'
					onClick={() => navigate(`/${RoutesEnum.MOVIE}/${id}`)}
					style={{ ...styles.button, ...styles.zIndex }}
				>
					<Trans>View more</Trans>
				</BaseButton>
			</Box>
		</Box>
	);
};

export default SelectedThumbsGalleryCard;
