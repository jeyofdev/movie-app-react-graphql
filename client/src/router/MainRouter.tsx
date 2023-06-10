import Genre from '@pages/genre/Genre';
import Home from '@pages/home/Home';
import MovieDetails from '@pages/movieDetails/MovieDetails';
import NotFound from '@pages/notFound/NotFound';
import NowPlaying from '@pages/nowPlaying/NowPlaying';
import Person from '@pages/person/Person';
import Popular from '@pages/popular/Popular';
import SearchResults from '@pages/searchResults/SearchResults';
import TopRated from '@pages/topRated/TopRated';
import Upcoming from '@pages/upComing/UpComing';
import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from '../types/enums';

const MainRouter = () => (
	<Routes>
		<Route path={RoutesEnum.MOVIES_POPULAR} element={<Popular />} />
		<Route path={RoutesEnum.MOVIES_UPCOMING} element={<Upcoming />} />
		<Route path={RoutesEnum.MOVIES_TOP_RATED} element={<TopRated />} />
		<Route path={RoutesEnum.MOVIES_NOW_PLAYING} element={<NowPlaying />} />
		<Route path={`${RoutesEnum.MOVIES_GENRE}/:genreName`} element={<Genre />} />
		<Route path={`${RoutesEnum.MOVIE}/:movieId`} element={<MovieDetails />} />
		<Route path={`${RoutesEnum.SEARCH}/:search`} element={<SearchResults />} />
		<Route path={`${RoutesEnum.PERSON}/:personId`} element={<Person />} />

		<Route path={RoutesEnum.ROOT} element={<Home />}>
			<Route path={RoutesEnum.HOME} element={<Home />} />
		</Route>

		<Route path='*' element={<NotFound />} />
	</Routes>
);

export default MainRouter;
