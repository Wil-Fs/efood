import { Restaurante } from '../../pages/Home';
import Footer from '../Footer';
import Hero from '../Hero';
import Restaurant from '../Restaurant';
import { RestaurantContainer } from './styles';

type Props = {
	restaurants: Restaurante[];
};

const RestaurantList = ({ restaurants }: Props) => {
	return (
		<>
			<Hero />
			<div className={'Container'}>
				<RestaurantContainer>
					{restaurants.map(
						({
							id,
							titulo,
							capa,
							avaliacao,
							descricao,
							tipo,
							destacado,
						}) => (
							<Restaurant
								key={id}
								image={capa}
								description={descricao}
								review={avaliacao}
								title={titulo}
								infos={tipo}
								to={`/restaurant/${id}`}
								destaque={destacado}
							/>
						)
					)}
				</RestaurantContainer>
			</div>
			<Footer />
		</>
	);
};

export default RestaurantList;
