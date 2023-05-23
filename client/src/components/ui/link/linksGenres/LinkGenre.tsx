import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import { Box, useTheme } from '@mui/material';
import { formatGenreForUrl } from '@utils/index';
import { useNavigate } from 'react-router-dom';
import { LinksGenresProps } from '../../../../types/types/props';
import useStyles from './style';

const LinksGenres = ({ genres, sx }: LinksGenresProps) => {
	const navigate = useNavigate();
	const theme = useTheme();
	const styles = useStyles(theme);

	if (!genres || genres?.length === 0) {
		return <></>;
	}

	return (
		<Box sx={styles.root}>
			{genres.map((genre, i) => (
				<Box key={genre?.id} sx={{ display: 'flex' }}>
					<BaseButton
						style={{ ...styles.genreButton, ...sx }}
						disableRipple
						onClick={() =>
							navigate(formatGenreForUrl(genre?.name), {
								state: { genreId: genre?.id },
							})
						}
					>
						{genre?.name}
					</BaseButton>

					{genres.length !== i + 1 && (
						<span style={{ ...styles.span, ...sx }}>,&nbsp;</span>
					)}
				</Box>
			))}
		</Box>
	);
};

export default LinksGenres;
