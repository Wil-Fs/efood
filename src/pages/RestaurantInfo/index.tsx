import Banner from '../../components/Banner';
import HeroInfos from '../../components/HeroInfos';

import { Overlay } from './styles';
import FoodList from '../../components/FoodList';
import Footer from '../../components/Footer';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Restaurante } from '../Home';

export type GalleryState = {
	isVisible: boolean;
};

const RestaurantInfo = () => {
	const { id } = useParams();

	const [restaurantInfo, setRestaurantInfo] = useState<Restaurante[]>([]);

	const [modal, setModal] = useState<GalleryState>({
		isVisible: false,
	});

	useEffect(() => {
		fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
			.then((res) => res.json())
			.then((res) => setRestaurantInfo([res]));
	}, [id]);

	const openOrCloseModal = () =>
		!modal.isVisible
			? setModal({
					isVisible: true,
			  })
			: setModal({ isVisible: false });

	return (
		<Overlay>
			<HeroInfos toLinkHome="/" toLinkCar="carrinho" />
			{restaurantInfo.map((rest) => (
				<Banner
					key={rest.id}
					banner={rest.capa}
					type={rest.tipo}
					title={rest.titulo}
				/>
			))}

			<FoodList onClick={() => openOrCloseModal()} />
			<Footer />
		</Overlay>
	);
};

export default RestaurantInfo;
