import { BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas';
import { GlobalStyle } from './styles';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<Rotas />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
