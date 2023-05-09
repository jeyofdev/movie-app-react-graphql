import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => (
	<Routes>
		<Route path='/' element={<Home />}>
			<Route path='home' element={<Home />} />
		</Route>

		<Route path='*' element={<NotFound />} />
	</Routes>
);

export default MainRouter;
