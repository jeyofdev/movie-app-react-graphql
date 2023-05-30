import ListResultCard from '@components/cards/listResultCard/ListResultCard';
import { Box, Typography, useTheme } from '@mui/material';
import { ListContainerProps } from '../../../types/types/props';
import useStyles from './style';

const ListContainer = ({ list, title }: ListContainerProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<Box sx={styles.primaryContentBox}>
			{title && (
				<Typography variant='h3' sx={styles.title}>
					{title}
				</Typography>
			)}

			<Box sx={styles.cards}>
				{list?.map(movie => (
					<ListResultCard
						key={movie?.id}
						id={movie?.id}
						poster_path={movie?.poster_path}
						title={movie?.title}
						vote_average={movie?.vote_average}
					/>
				))}
			</Box>
		</Box>
	);
};
export default ListContainer;
