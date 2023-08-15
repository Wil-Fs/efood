import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles';
import Home from './pages/Home';
import RestaurantInfo from './pages/RestaurantInfo';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'restaurant',
		element: <RestaurantInfo />,
	},
]);

function App() {
	return (
		<>
			<GlobalStyle />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
