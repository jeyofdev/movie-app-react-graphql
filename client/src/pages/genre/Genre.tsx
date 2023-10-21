import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import AlertBase from '@components/ui/alert/Alert';
import { Movie } from '@graphql/__generated__/graphql-type';
import useGenreTitle from '@hooks/useGenreTitle';
import useMoviesByGenre from '@hooks/useMoviesByGenre';
import { Trans } from '@lingui/macro';
import { Box } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../types/enums';
import useStyles from './style';

const Genre = () => {
	const styles = useStyles();
	const location = useLocation();
	const navigate = useNavigate();
	const [page, setPage] = useState(1);

	const {
		loading: loadingGenres,
		error: errorGenres,
		getTitleGenre,
	} = useGenreTitle('no-cache');

	const { loading, error, data } = useMoviesByGenre(page);

	const handleChangePage = (_: ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!location?.state) {
		navigate(`/${RoutesEnum.MOVIES_LIST}`);
	}

	if (loading || loadingGenres) {
		return <LoaderContainer />;
	}

	if (error || errorGenres) {
		return (
			<AlertBase>
				<Trans>An error has occurred !!!</Trans>
			</AlertBase>
		);
	}

	return (
		<Box sx={styles.root}>
			<ListContainer
				list={data?.discoverMoviesByGenre?.results as Array<Movie>}
				title={firstLetterCapitalize(getTitleGenre())}
				totalPages={data?.discoverMoviesByGenre?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
			/>
		</Box>
	);
};

export default Genre;
