import { useEffect, useState } from 'react';
import Food from '../Food';
import * as S from './styles';
import { Restaurante } from '../../pages/Home';
import { useParams } from 'react-router-dom';

type Props = {
	onClick: () => void;
};

const FoodList = ({ onClick }: Props) => {
	const { id } = useParams();

	const [foods, setFoods] = useState<Restaurante[]>([]);

	useEffect(() => {
		fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
			.then((res) => res.json())
			.then((res) => setFoods([res]));
	}, [id]);

	const getCardapio = () => {
		const cardapio = [];

		for (let i = 0; i < foods.length; i++) {
			for (let f = 0; f < foods[i].cardapio.length; f++) {
				cardapio.push(foods[i].cardapio[f]);
			}
		}

		return cardapio;
	};

	const food = getCardapio();

	return (
		<S.Background>
			<div className="Container">
				<S.FoodList>
					{food.map((f) => (
						<Food
							key={f.id}
							title={f.nome}
							image={f.foto}
							description={f.descricao}
							onClick={() => onClick()}
							toLink=""
						/>
					))}
				</S.FoodList>
			</div>
		</S.Background>
	);
};

export default FoodList;
