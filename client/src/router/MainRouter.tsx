import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import NotFound from '../page/NotFound';

const MainRouter = () => (
	<Routes>
		<Route path='/' element={<Home />}>
			<Route path='home' element={<Home />} />
		</Route>

		<Route path='*' element={<NotFound />} />
	</Routes>
);

export default MainRouter;
