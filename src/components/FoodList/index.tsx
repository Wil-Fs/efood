import { useEffect, useState } from 'react';
import Food from '../Food';
import * as S from './styles';
import iconClose from '../../assets/images/close.png';
import { Restaurante } from '../../pages/Home';
import { useParams } from 'react-router-dom';
import { ModalContainer, ModalContent } from './styles';
import { GalleryState } from '../../pages/RestaurantInfo';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cart';

export const formatPrice = (price = 0) =>
	new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(price);

const FoodList = () => {
	const { id } = useParams();

	const [foods, setFoods] = useState<Restaurante[]>([]);

	const dispatch = useDispatch();

	const [modal, setModal] = useState<GalleryState>({
		isVisible: false,
		id: 0,
		nome: '',
		foto: '',
		descricao: '',
		porcao: '',
		preco: 0,
	});

	useEffect(() => {
		fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
			.then((res) => res.json())
			.then((res) => setFoods([res]));
	}, [id]);

	const openModal = (
		id: number,
		foto: string,
		nome: string,
		descricao: string,
		porcao: string,
		preco: number
	) => {
		setModal({
			isVisible: true,
			id: id,
			foto: foto,
			nome: nome,
			descricao: descricao,
			porcao: porcao,
			preco: preco,
		});
	};

	const closeModal = () => {
		setModal({
			isVisible: false,
			id: 0,
			foto: '',
			nome: '',
			descricao: '',
			porcao: '',
			preco: 0,
		});
	};

	return (
		<S.Background>
			<div className="Container">
				<S.FoodList>
					{foods.map((f) =>
						f.cardapio.map((f) => (
							<Food
								id={f.id}
								key={f.id}
								title={f.nome}
								image={f.foto}
								description={f.descricao}
								SelectedFood={() => {
									openModal(
										f.id,
										f.foto,
										f.nome,
										f.descricao,
										f.porcao,
										f.preco
									);
								}}
								toLink=""
							/>
						))
					)}

					<ModalContainer
						key={modal.id}
						onClick={() => closeModal()}
						className={!modal.isVisible ? '' : 'visible'}
					>
						<div className="modal Container">
							<ModalContent key={modal.id}>
								<img src={modal.foto} alt={modal.nome} />
								<img
									onClick={() => closeModal()}
									className="btnClose"
									src={iconClose}
									alt=""
								/>
								<div className="textContainer">
									<h3> {modal.nome}</h3>
									<p>
										{modal.descricao}
										<br />
										<br />
										<span>Serve: {modal.porcao}</span>
									</p>
									<S.BtnCart
										onClick={() =>
											dispatch(addToCart(modal))
										}
									>
										Adicionar ao carrinho - R${' '}
										{`${formatPrice(modal.preco)}`}
									</S.BtnCart>
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
