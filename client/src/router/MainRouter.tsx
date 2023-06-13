import RequireAuth from '@components/auth/requireAuth/RequireAuth';
import LandingContainer from '@components/containers/landingContainer/LandingContainer';
import Genre from '@pages/genre/Genre';
import MovieDetails from '@pages/movieDetails/MovieDetails';
import MoviesList from '@pages/moviesList/MoviesList';
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
		<Route
			path={RoutesEnum.MOVIES_LIST}
			element={
				<RequireAuth>
					<MoviesList />
				</RequireAuth>
			}
		/>
		<Route
			path={RoutesEnum.MOVIES_POPULAR}
			element={
				<RequireAuth>
					<Popular />
				</RequireAuth>
			}
		/>
		<Route
			path={RoutesEnum.MOVIES_UPCOMING}
			element={
				<RequireAuth>
					<Upcoming />
				</RequireAuth>
			}
		/>
		<Route
			path={RoutesEnum.MOVIES_TOP_RATED}
			element={
				<RequireAuth>
					<TopRated />
				</RequireAuth>
			}
		/>
		<Route
			path={RoutesEnum.MOVIES_NOW_PLAYING}
			element={
				<RequireAuth>
					<NowPlaying />
				</RequireAuth>
			}
		/>
		<Route
			path={`${RoutesEnum.MOVIES_GENRE}/:genreName`}
			element={
				<RequireAuth>
					<Genre />
				</RequireAuth>
			}
		/>
		<Route
			path={`${RoutesEnum.MOVIE}/:movieId`}
			element={
				<RequireAuth>
					<MovieDetails />
				</RequireAuth>
			}
		/>
		<Route
			path={`${RoutesEnum.SEARCH}/:search`}
			element={
				<RequireAuth>
					<SearchResults />
				</RequireAuth>
			}
		/>
		<Route
			path={`${RoutesEnum.PERSON}/:personId`}
			element={
				<RequireAuth>
					<Person />
				</RequireAuth>
			}
		/>

		<Route path={RoutesEnum.ROOT} element={<LandingContainer />}>
			<Route path={RoutesEnum.HOME} element={<LandingContainer />} />
		</Route>

		<Route path='*' element={<NotFound />} />
	</Routes>
);

export default MainRouter;
