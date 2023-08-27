import Food from '../Food';
import * as S from './styles';

import { Restaurante } from '../../pages/Home';
import { useEffect, useState } from 'react';

type Props = {
	foods: Restaurante[];
	onClick: () => void;
};

const FoodList = ({ onClick }: Props) => {
	const [cardapio, setCardapio] = useState<Restaurante[]>([]);

	console.log(cardapio);

	useEffect(() => {
		fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
			.then((res) => res.json())
			.then((res) => setCardapio(res));
	}, []);

	return (
		<S.Background>
			<div className="Container">
				<S.FoodList>
					{cardapio.map(({ cardapio }) => (
						<Food
							key={cardapio.id}
							description={cardapio.descricao}
							image={cardapio.foto}
							title={cardapio.nome}
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
