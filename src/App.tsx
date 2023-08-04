import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles';
import Home from './components/pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
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
