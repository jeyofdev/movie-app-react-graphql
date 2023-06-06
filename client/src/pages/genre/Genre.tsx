import ListContainer from '@components/containers/listContainer/ListContainer';
import {
	Movie,
	useDiscoverMoviesByGenreQuery,
} from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useStyles from './style';

const Genre = () => {
	const styles = useStyles();
	const location = useLocation();
	const { genreName } = useParams();

	const [page, setPage] = useState(1);

	const { loading, error, data } = useDiscoverMoviesByGenreQuery({
		variables: {
			discoverOptions: {
				with_genres: Number(location?.state?.genreId),
				page,
			},
		},
	});

	const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading) {
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box>{error?.message}</Box>;
	}

	return (
		<Box sx={styles.root}>
			<ListContainer
				list={data?.discoverMoviesByGenre?.results as Array<Movie>}
				title={firstLetterCapitalize(genreName?.replaceAll('-', ' ') as string)}
				totalPages={data?.discoverMoviesByGenre?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
			/>
		</Box>
	);
};

export default Genre;
