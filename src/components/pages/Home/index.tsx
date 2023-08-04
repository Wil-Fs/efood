import Hero from '../../Hero';
import Restaurant from '../../Restaurant';

import { RestaurantList } from './styles';

import sushi from '../../../assets/images/sushi.png';

const Home = () => (
	<div>
		<Hero />
		<div className={'Container'}>
			<RestaurantList>
				<Restaurant
					title={'Hioki Sushi'}
					description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
					image={sushi}
					infos={['Destaque da semana', 'Japonesa']}
					review={4.9}
				/>
			</RestaurantList>
		</div>
	</div>
);

export default Home;
