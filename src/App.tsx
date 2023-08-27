import { BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas';
import { GlobalStyle } from './styles';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Rotas />
		</BrowserRouter>
	);
}

export default App;
