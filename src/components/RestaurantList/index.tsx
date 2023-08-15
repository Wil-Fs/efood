import RestaurantClass from '../../models/Restaurant/RestaurantClass';
import Footer from '../Footer';
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
				{restaurants?.map(
					({ id, image, description, infos, review, title, to }) => (
						<Restaurant
							key={id}
							image={image}
							description={description}
							infos={infos}
							review={review}
							title={title}
							to={to}
						/>
					)
				)}
			</RestaurantContainer>
		</div>
		<Footer />
	</>
);

export default RestaurantList;
