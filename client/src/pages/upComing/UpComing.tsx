import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	Movie,
	useUpcomingMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Trans, t } from '@lingui/macro';
import { Box } from '@mui/material';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import useStyles from './style';

const Upcoming = () => {
	const styles = useStyles();
	const { currentLocale, currentRegion } = useContext(TranslationContext);

	const [page, setPage] = useState(1);

	const { loading, error, data } = useUpcomingMoviesQuery({
		variables: {
			options: {
				page,
				language: currentLocale,
				region: currentRegion,
			},
		},
		fetchPolicy: 'cache-and-network',
	});

	const handleChangePage = (_: ChangeEvent<unknown>, value: number) => {
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
				list={data?.upcomingMovies?.results as Array<Movie>}
				title={t`Upcoming movies`}
				totalPages={data?.upcomingMovies?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
			/>
		</Box>
	);
};

export default Upcoming;
