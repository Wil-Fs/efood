import Food from '../Food';
import * as S from './styles';
import iconClose from '../../assets/images/close.png';

import { useParams } from 'react-router-dom';
import { ModalContainer, ModalContent } from './styles';
import { GalleryState } from '../../pages/RestaurantInfo';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cart';
import { useGetRestaurantQuery } from '../../services/api';
import { useState } from 'react';

export const formatPrice = (price = 0) =>
	new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(price);

const FoodList = () => {
	const { id } = useParams();

	const { data: foods } = useGetRestaurantQuery(id!);

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

	if (!foods) {
		return <h2></h2>;
	}

	return (
		<S.Background>
			<div className="Container">
				<S.FoodList>
					{foods.cardapio.map((f) => (
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
					))}

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
									<p>{modal.descricao}</p>
									<span className="serve">
										Serve: {modal.porcao}
									</span>
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
