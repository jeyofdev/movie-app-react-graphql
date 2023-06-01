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

const MainRouter = () => (
	<Routes>
		<Route path='movies/popular' element={<Popular />} />
		<Route path='movies/upcoming' element={<Upcoming />} />
		<Route path='movies/top-rated' element={<TopRated />} />
		<Route path='movies/now-playing' element={<NowPlaying />} />
		<Route path='movies/genre/:genreName' element={<Genre />} />
		<Route path='movie/:movieId' element={<MovieDetails />} />
		<Route path='search/:search' element={<SearchResults />} />
		<Route path='person/:personId' element={<Person />} />

		<Route path='/' element={<Home />}>
			<Route path='home' element={<Home />} />
		</Route>

		<Route path='*' element={<NotFound />} />
	</Routes>
);

export default MainRouter;
