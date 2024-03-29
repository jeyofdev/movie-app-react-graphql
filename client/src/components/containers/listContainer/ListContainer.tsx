import ListResultCard from '@components/cards/listResultCard/ListResultCard';
import useTheme from '@hooks/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Pagination, PaginationItem, Typography } from '@mui/material';
import { ListContainerProps } from '../../../types/types/props';
import useStyles from './style';

const ListContainer = ({
	list,
	title,
	totalPages,
	currentPage,
	setCurrentPage,
	cardGridColumn = {},
}: ListContainerProps) => {
	const { theme } = useTheme();
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
						cardGridColumn={cardGridColumn}
					/>
				))}
			</Box>

			{currentPage && (
				<Box sx={{ marginTop: theme.spacing(4) }}>
					<Pagination
						size='small'
						count={(totalPages as number) > 100 ? 100 : totalPages}
						page={currentPage}
						onChange={setCurrentPage}
						renderItem={item => (
							<PaginationItem
								sx={styles.paginationItem}
								slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
								{...item}
							/>
						)}
					/>
				</Box>
			)}
		</Box>
	);
};
export default ListContainer;
