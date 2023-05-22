import ComingSoon from '@pages/comingSoon/ComingSoon';
import Home from '@pages/home/Home';
import NotFound from '@pages/notFound/NotFound';
import Popular from '@pages/popular/Popular';
import TopRated from '@pages/topRated/TopRated';
import Upcoming from '@pages/upComing/UpComing';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => (
	<Routes>
		<Route path='movies/popular' element={<Popular />} />
		<Route path='movies/upcoming' element={<Upcoming />} />
		<Route path='movies/top-rated' element={<TopRated />} />

		<Route path='/' element={<Home />}>
			<Route path='home' element={<Home />} />
		</Route>

		<Route path='coming-soon' element={<ComingSoon />} />

		<Route path='*' element={<NotFound />} />
	</Routes>
);

export default MainRouter;
