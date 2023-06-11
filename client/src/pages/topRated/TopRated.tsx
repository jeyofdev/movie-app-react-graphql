import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	Movie,
	useTopRatedMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Trans, t } from '@lingui/macro';
import { Box } from '@mui/material';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import useStyles from './style';

const TopRated = () => {
	const styles = useStyles();
	const { currentLocale } = useContext(TranslationContext);

	const [page, setPage] = useState(1);

	const { loading, error, data } = useTopRatedMoviesQuery({
		variables: {
			options: {
				page,
				language: currentLocale,
			},
		},
		fetchPolicy: 'cache-and-network',
	});

	const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading) {
		return <LoaderContainer />;
	}

	if (error) {
		return (
			<AlertBase>
				<Trans>An error has occurred !!!</Trans>
			</AlertBase>
		);
	}

	return (
		<Box sx={styles.root}>
			<ListContainer
				list={data?.topRatedMovies?.results as Array<Movie>}
				totalPages={data?.topRatedMovies?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
				title={t`Top rated movies`}
			/>
		</Box>
	);
};

export default TopRated;
