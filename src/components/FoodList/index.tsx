import { useEffect, useState } from 'react';
import Food from '../Food';
import * as S from './styles';
import { Restaurante } from '../../pages/Home';
import { useParams } from 'react-router-dom';

type Props = {
	onClick: (id: number) => number | void;
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

	const getId = (id: number) => {
		const cardapio = [];

		for (let i = 0; i <= id - 1; i++) {
			if (id === id) {
				cardapio.push(food[id - 1].id);
				cardapio.length > 1 && cardapio.shift();
			}
		}

		return cardapio;
	};

	return (
		<S.Background>
			<div className="Container">
				<S.FoodList>
					{food.map((f) => (
						<Food
							id={f.id}
							key={f.id}
							title={f.nome}
							image={f.foto}
							description={f.descricao}
							SelectedFood={() => {
								onClick(f.id);
								getId(f.id);
							}}
							toLink=""
						/>
					))}
				</S.FoodList>
			</div>
		</S.Background>
	);
};

export default FoodList;
