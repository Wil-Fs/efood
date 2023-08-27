import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantInfo from './pages/RestaurantInfo';

const Rotas = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="restaurant/:id" element={<RestaurantInfo />} />
	</Routes>
);

export default Rotas;
