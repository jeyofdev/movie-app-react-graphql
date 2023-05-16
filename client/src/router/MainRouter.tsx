import ComingSoon from '@pages/ComingSoon';
import Home from '@pages/home/Home';
import NotFound from '@pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => (
	<Routes>
		<Route path='/' element={<Home />}>
			<Route path='home' element={<Home />} />
			<Route path='coming-soon' element={<ComingSoon />} />
		</Route>

		<Route path='*' element={<NotFound />} />
	</Routes>
);

export default MainRouter;
