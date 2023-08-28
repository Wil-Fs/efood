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

	console.log(foods.map((food, index) => food.cardapio[index + 2].nome));

	return (
		<S.Background>
			<div className="Container">
				<S.FoodList>
					{foods.map(({ cardapio }, index) => (
						<Food
							key={cardapio[index].id}
							description={cardapio[index].descricao}
							image={cardapio[index].foto}
							title={cardapio[index].nome}
							toLink=""
							onClick={() => onClick()}
						/>
					))}
				</S.FoodList>
			</div>
		</S.Background>
	);
};

export default FoodList;
