import RestaurantClass from '../../models/Restaurant/RestaurantClass';
import Hero from '../Hero';
import Restaurant from '../Restaurant';
import { RestaurantContainer } from './styles';

export type Props = {
	restaurants: RestaurantClass[];
};

const RestaurantList = ({ restaurants }: Props) => (
	<>
		<Hero />
		<div className={'Container'}>
			<RestaurantContainer>
				{restaurants?.map((restaurant) => (
					<Restaurant
						key={restaurant.id}
						image={restaurant.image}
						description={restaurant.description}
						infos={restaurant.infos}
						review={restaurant.review}
						title={restaurant.title}
					/>
				))}
			</RestaurantContainer>
		</div>
	</>
);

export default RestaurantList;
