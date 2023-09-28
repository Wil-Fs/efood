import Banner from '../../components/Banner';
import HeroInfos from '../../components/HeroInfos';

import { Overlay } from './styles';
import FoodList from '../../components/FoodList';
import Footer from '../../components/Footer';

import { useParams } from 'react-router-dom';
import CartCheckout from '../../components/Cart';
import { useGetRestaurantQuery } from '../../services/api';

export type GalleryState = {
	isVisible: boolean;
	id: number;
	nome: string;
	foto: string;
	descricao: string;
	porcao: string;
	preco: number;
};

const RestaurantInfo = () => {
	const { id } = useParams();

	const { data: restaurantInfo } = useGetRestaurantQuery(id!);

	if (!restaurantInfo) {
		return <></>;
	}

	return (
		<Overlay>
			<HeroInfos toLinkHome="/" />

			<Banner
				key={restaurantInfo.id}
				banner={restaurantInfo.capa}
				type={restaurantInfo.tipo}
				title={restaurantInfo.titulo}
			/>

			<FoodList />
			<Footer />
			<CartCheckout />
		</Overlay>
	);
};

export default RestaurantInfo;
