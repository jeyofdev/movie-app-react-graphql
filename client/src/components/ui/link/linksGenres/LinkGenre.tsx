import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import { Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LinksGenresProps } from '../../../../types/types/props';
import useStyles from './style';

const LinksGenres = ({ genres }: LinksGenresProps) => {
	const navigate = useNavigate();
	const theme = useTheme();
	const styles = useStyles();

	if (!genres || genres?.length === 0) {
		return <></>;
	}

	return (
		<Box sx={styles.root}>
			{genres.map((genre, i) => (
				<Box key={genre?.id} sx={{ display: 'flex' }}>
					<BaseButton
						style={styles.genreButton}
						disableRipple
						onClick={() =>
							navigate(`/${genre?.name.toLowerCase().split(' ').join('-')}`)
						}
					>
						{genre?.name}
					</BaseButton>

					{genres.length !== i + 1 && (
						<span
							style={{ color: theme.palette.primary.main, marginTop: '2px' }}
						>
							,&nbsp;
						</span>
					)}
				</Box>
			))}
		</Box>
	);
};

export default LinksGenres;
