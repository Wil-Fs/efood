import Banner from '../../components/Banner';
import HeroInfos from '../../components/HeroInfos';

import iconClose from '../../assets/images/close.png';

import FoodList from '../../components/FoodList';
import Footer from '../../components/Footer';
import { ModalContainer, ModalContent, OverLay } from './styles';
import Tag from '../../components/Tag';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Restaurante } from '../Home';

type GalleryState = {
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
		<OverLay>
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
			<ModalContainer
				onClick={() => openOrCloseModal()}
				className={!modal.isVisible ? '' : 'visible'}
			>
				<div className="modal Container">
					{restaurantInfo.map(({ cardapio }, index) => (
						<ModalContent key={cardapio[index].id}>
							<img
								src={cardapio[index].foto}
								alt={cardapio[index].nome}
							/>
							<img
								onClick={() => openOrCloseModal()}
								className="btnClose"
								src={iconClose}
								alt=""
							/>
							<div className="textContainer">
								<h3>{cardapio[index].nome}</h3>
								<p>
									{cardapio[index].descricao}
									<br />
									<br />
									<span>Serve: {cardapio[index].porcao}</span>
								</p>
								<Tag type="button">
									Adicionar ao carrinho - R${' '}
									{`${cardapio[index].preco}`}
								</Tag>
							</div>
						</ModalContent>
					))}
				</div>
			</ModalContainer>
		</OverLay>
	);
};

export default RestaurantInfo;
