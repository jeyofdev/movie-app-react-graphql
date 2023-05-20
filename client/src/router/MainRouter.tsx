import ComingSoon from '@pages/comingSoon/ComingSoon';
import Home from '@pages/home/Home';
import NotFound from '@pages/notFound/NotFound';
import Popular from '@pages/popular/Popular';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => (
	<Routes>
		<Route path='movies' element={<Popular />}>
			<Route path='popular' element={<Popular />} />
		</Route>

		<Route path='/' element={<Home />}>
			<Route path='home' element={<Home />} />
		</Route>

		<Route path='coming-soon' element={<ComingSoon />} />

		<Route path='*' element={<NotFound />} />
	</Routes>
);

export default MainRouter;
