import Banner from '../../components/Banner';
import HeroInfos from '../../components/HeroInfos';

import iconClose from '../../assets/images/close.png';
import pizza from '../../assets/images/pizza.png';
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
			.then((res) => setRestaurantInfo(res));
	}, []);

	const openOrCloseModal = () =>
		!modal.isVisible
			? setModal({
					isVisible: true,
			  })
			: setModal({ isVisible: false });

	return (
		<OverLay>
			<HeroInfos toLinkHome="/" toLinkCar="carrinho" />
			<Banner />
			<FoodList
				onClick={() => openOrCloseModal()}
				foods={restaurantInfo}
			/>
			<Footer />
			<ModalContainer
				onClick={() => openOrCloseModal()}
				className={!modal.isVisible ? '' : 'visible'}
			>
				<div className="modal Container">
					<ModalContent>
						<img src={pizza} alt="" />
						<img
							onClick={() => openOrCloseModal()}
							className="btnClose"
							src={iconClose}
							alt=""
						/>
						<div className="textContainer">
							<h3>Pizza Marguerita</h3>
							<p>
								A pizza Margherita é uma pizza clássica da
								culinária italiana, reconhecida por sua
								simplicidade e sabor inigualável. Ela é feita
								com uma base de massa fina e crocante, coberta
								com molho de tomate fresco, queijo mussarela de
								alta qualidade, manjericão fresco e azeite de
								oliva extra-virgem. A combinação de sabores é
								perfeita, com o molho de tomate suculento e
								ligeiramente ácido, o queijo derretido e cremoso
								e as folhas de manjericão frescas, que adicionam
								um toque de sabor herbáceo. É uma pizza simples,
								mas deliciosa, que agrada a todos os paladares e
								é uma ótima opção para qualquer ocasião.
								<br />
								<br />
								<span>Serve: de 2 a 3 pessoas</span>
							</p>
							<Tag type="button">
								Adicionar ao carrinho - R$ 60.90
							</Tag>
						</div>
					</ModalContent>
				</div>
			</ModalContainer>
		</OverLay>
	);
};

export default RestaurantInfo;
