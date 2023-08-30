import { useEffect, useState } from 'react';
import Food from '../Food';
import * as S from './styles';
import iconClose from '../../assets/images/close.png';
import { Restaurante } from '../../pages/Home';
import { useParams } from 'react-router-dom';
import { ModalContainer, ModalContent } from './styles';
import Tag from '../Tag';
import { GalleryState } from '../../pages/RestaurantInfo';

type Props = {
	onClick: (id: number) => number | void;
};

export type CardapioF = {
	foto: string;
	preco: number;
	id: number;
	nome: string;
	descricao: string;
	porcao: string;
};

const FoodList = ({ onClick }: Props) => {
	const { id } = useParams();

	const [foods, setFoods] = useState<Restaurante[]>([]);

	const [modal, setModal] = useState<GalleryState>({
		isVisible: false,
	});

	const [cardpioFil, setCardapioFil] = useState({
		foto: '',
		preco: 0,
		id: 0,
		nome: '',
		descricao: '',
		porcao: '',
	});

	useEffect(() => {
		fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
			.then((res) => res.json())
			.then((res) => setFoods([res]));
	}, [id]);

	function openOrCloseModal() {
		!modal.isVisible
			? setModal({
					isVisible: true,
			  })
			: setModal({ isVisible: false });
	}

	const formatPrice = (price = 0) =>
		new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(price);

	const getCardapio = () => {
		const cardapio = [];

		for (let i = 0; i < foods.length; i++) {
			for (let f = 0; f < foods[i].cardapio.length; f++) {
				cardapio.push(foods[i].cardapio[f]);
			}
		}

		return cardapio;
	};

	const food = getCardapio();

	return (
		<S.Background>
			<div className="Container">
				<S.FoodList>
					{food.map((f) => (
						<Food
							id={f.id}
							key={f.id}
							title={f.nome}
							image={f.foto}
							description={f.descricao}
							SelectedFood={() => {
								openOrCloseModal();
								onClick(f.id);
								setCardapioFil(f);
							}}
							toLink=""
						/>
					))}

					<ModalContainer
						onClick={() => openOrCloseModal()}
						className={!modal.isVisible ? '' : 'visible'}
					>
						<div className="modal Container">
							<ModalContent key={cardpioFil.id}>
								<img
									src={cardpioFil.foto}
									alt={cardpioFil.nome}
								/>
								<img
									onClick={() => openOrCloseModal()}
									className="btnClose"
									src={iconClose}
									alt=""
								/>
								<div className="textContainer">
									<h3>{cardpioFil.nome}</h3>
									<p>
										{cardpioFil.descricao}
										<br />
										<br />
										<span>Serve: {cardpioFil.porcao}</span>
									</p>
									<Tag type="button">
										Adicionar ao carrinho - R${' '}
										{`${formatPrice(cardpioFil.preco)}`}
									</Tag>
								</div>
							</ModalContent>
						</div>
					</ModalContainer>
				</S.FoodList>
			</div>
		</S.Background>
	);
};

export default FoodList;
