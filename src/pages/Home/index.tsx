import { useEffect, useState } from 'react';
import RestaurantList from '../../components/RestaurantList';

import { Background } from './styles';

export type Restaurante = {
	id: number;
	titulo: string;
	destacado: boolean;
	tipo: string;
	avaliacao: number;
	descricao: string;
	capa: string;
	cardapio: {
		foto: string;
		preco: number;
		id: number;
		nome: string;
		descricao: string;
		porcao: string;
	};
};

const Home = () => {
	const [restaurants, setRestaurants] = useState<Restaurante[]>([]);

	useEffect(() => {
		fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
			.then((res) => res.json())
			.then((res) => setRestaurants(res));
	}, []);

	console.log(restaurants);
	return (
		<Background>
			<RestaurantList restaurants={restaurants} />
		</Background>
	);
};

export default Home;
