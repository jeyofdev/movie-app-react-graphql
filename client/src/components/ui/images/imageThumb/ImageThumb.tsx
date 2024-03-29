import { faImage, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { t } from '@lingui/macro';
import { Box, Typography } from '@mui/material';
import { ImageThumbPropsType } from '../../../../types/types/props';
import useStyles from './style';

const ImageThumb = ({
	src,
	imageAlt,
	noImageBoxStyle,
	posterStyle,
	person,
}: ImageThumbPropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);

	return (
		<>
			{src ? (
				<Box
					component='img'
					sx={posterStyle}
					alt={imageAlt}
					src={`https://image.tmdb.org/t/p/w500${src}`}
				/>
			) : (
				<Box sx={noImageBoxStyle}>
					<FontAwesomeIcon
						icon={person ? faUser : faImage}
						color={theme.palette.primary.contrastText}
						style={styles.noImageIcon}
					/>

					<Typography variant='h5' sx={styles.noImageTypo}>
						{person ? t`No photo` : t`No Image`}
					</Typography>
				</Box>
			)}
		</>
	);
};

export default ImageThumb;
