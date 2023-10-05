import RestaurantList from '../../components/RestaurantList';
import { Background } from './styles';
import { useGetRestaurantsQuery } from '../../services/api';
import Spinner from '../../components/Spinner';

export type Restaurante = {
	id: number;
	titulo: string;
	destacado: boolean;
	tipo: string;
	avaliacao: number;
	descricao: string;
	capa: string;
	cardapio: [
		{
			foto: string;
			preco: number;
			id: number;
			nome: string;
			descricao: string;
			porcao: string;
		},
	];
};

const Home = () => {
	const { data: restaurants } = useGetRestaurantsQuery();

	if (!restaurants) return <Spinner />;

	return (
		<Background>
			<RestaurantList restaurants={restaurants!} />
		</Background>
	);
};

export default Home;
