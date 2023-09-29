import {
	Aside,
	Cart,
	Form,
	InputGroup,
	Item,
	List,
	OverLay,
	ValueContainer,
} from './styles';
import Tag from '../Tag';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, removeToCart } from '../../store/reducers/cart';
import { formatPrice } from '../FoodList';
import { useEffect, useState } from 'react';
import { Button } from '../Tag/style';

type Checkout = {
	cartHasItem: boolean;
	deliveryIsOpen: boolean;
	payment: boolean;
};

const CartCheckout = () => {
	const { isOpen, itens } = useSelector((state: RootReducer) => state.cart);
	const dispatch = useDispatch();

	const [checkout, setCheckout] = useState<Checkout>({
		cartHasItem: false,
		deliveryIsOpen: false,
		payment: false,
	});

	const getFullPrice = () => {
		let price = 0;

		for (let i = 0; i < itens.length; i++) {
			price += itens[i].preco;
		}

		return price;
	};

	useEffect(() => {
		if (itens.length > 0) {
			setCheckout({
				cartHasItem: true,
				deliveryIsOpen: false,
				payment: false,
			});
		} else {
			setCheckout({
				cartHasItem: false,
				deliveryIsOpen: false,
				payment: false,
			});
		}
	}, [itens, dispatch]);

	const changeCheckOut = (
		cartHasItem: boolean,
		deliveryIsOpen: boolean,
		payment: boolean
	) => {
		setCheckout({
			cartHasItem: cartHasItem,
			deliveryIsOpen: deliveryIsOpen,
			payment: payment,
		});
	};

	return (
		<div className={!isOpen ? 'overlayOpen' : ''}>
			<OverLay onClick={() => dispatch(closeCart())} />
			<Aside>
				{!checkout.cartHasItem && (
					<>
						<div>
							<p>
								O carrinho está vazio, por favor adicione algum
								produto!
							</p>
						</div>
					</>
				)}
				{checkout.cartHasItem &&
					!checkout.deliveryIsOpen &&
					!checkout.payment && (
						<Cart>
							{itens.length > 0 && (
								<>
									<div>
										<List>
											{itens.map((item) => (
												<Item key={item.id}>
													<div>
														<img
															className="food"
															src={item.foto}
															alt={item.nome}
														/>
													</div>
													<div className="text">
														<h4>{item.nome}</h4>
														<span>
															{formatPrice(
																item.preco
															)}
														</span>
													</div>
													<button
														onClick={() =>
															dispatch(
																removeToCart(
																	item.id
																)
															)
														}
														className={'scrap'}
													/>
												</Item>
											))}
										</List>
									</div>
									<ValueContainer>
										<h4>Valor Total</h4>
										<span>
											{formatPrice(getFullPrice())}
										</span>
									</ValueContainer>
									<Tag
										type="button"
										toLink=""
										onClick={() =>
											changeCheckOut(true, true, false)
										}
									>
										{['Continuar com a entrega']}
									</Tag>
								</>
							)}{' '}
						</Cart>
					)}
				{checkout.cartHasItem &&
					checkout.deliveryIsOpen &&
					!checkout.payment && (
						<Form>
							<h3>Entrega</h3>
							<InputGroup>
								<label htmlFor="destinatarioNome">
									Quem irá receber?
								</label>
								<input
									type="text"
									name="destinatarioNome"
									id="destinatarioNome"
								/>
							</InputGroup>
							<InputGroup>
								<label htmlFor="adress">Endereço</label>
								<input type="text" name="adress" id="adress" />
							</InputGroup>
							<InputGroup>
								<label htmlFor="destinatarioNome">Cidade</label>
								<input
									type="text"
									name="destinatarioNome"
									id="destinatarioNome"
								/>
							</InputGroup>
							<InputGroup display="flex">
								<InputGroup margin="0" maxWidth="155px">
									<label htmlFor="destinatarioNome">
										CEP
									</label>
									<input
										type="text"
										name="destinatarioNome"
										id="destinatarioNome"
									/>
								</InputGroup>
								<InputGroup
									margin="0 0 0 34px"
									maxWidth="155px"
								>
									<label htmlFor="destinatarioNome">
										Número
									</label>
									<input
										type="text"
										name="destinatarioNome"
										id="destinatarioNome"
									/>
								</InputGroup>
							</InputGroup>
							<InputGroup margin="8px 8px 24px 8px">
								<label htmlFor="destinatarioNome">
									Complemento (opcional)
								</label>
								<input
									type="text"
									name="destinatarioNome"
									id="destinatarioNome"
								/>
							</InputGroup>
							<Button
								to=""
								onClick={() => changeCheckOut(true, true, true)}
							>
								Continuar com o pagamento
							</Button>
							<Button
								to=""
								onClick={() =>
									changeCheckOut(true, false, false)
								}
							>
								Voltar para o carrinho
							</Button>
						</Form>
					)}{' '}
				{checkout.payment &&
					checkout.cartHasItem &&
					checkout.deliveryIsOpen && (
						<>
							<Form>
								<h3>
									Pagamento - Valor a pagar{' '}
									{formatPrice(getFullPrice())}
								</h3>
								<InputGroup>
									<label htmlFor="cardOwner">
										Nome no cartão
									</label>
									<input
										type="text"
										id="cardOwner"
										name="cardOwner"
									/>
								</InputGroup>
								<InputGroup display="flex">
									<InputGroup
										maxWidth="228px"
										margin="0 30px 0 0"
									>
										<label htmlFor="cardNumber">
											Número do cartão
										</label>
										<input
											type="text"
											id="cardNumber"
											name="cardNumber"
										/>
									</InputGroup>
									<InputGroup maxWidth="87px" margin="0">
										<label htmlFor="cardCode">CVV</label>
										<input
											type="text"
											id="cardCode"
											name="cardCode"
										/>
									</InputGroup>
								</InputGroup>
								<InputGroup
									display="flex"
									margin="8px 8px 24px 8px"
								>
									<InputGroup
										maxWidth="155px"
										margin="0 32px 0 0"
									>
										<label htmlFor="expiresMonth">
											Mês de vencimento
										</label>
										<input
											type="text"
											id="expiresMonth"
											name="expiresMonth"
										/>
									</InputGroup>
									<InputGroup maxWidth="155px" margin="0">
										<label htmlFor="expiresYear">
											Ano de vencimento
										</label>
										<input
											type="text"
											id="expiresYear"
											name="expiresYear"
										/>
									</InputGroup>
								</InputGroup>
								<Button
									to=""
									onClick={() =>
										changeCheckOut(true, true, true)
									}
								>
									Finalizar pagamento
								</Button>
								<Button
									to=""
									onClick={() =>
										changeCheckOut(true, true, false)
									}
								>
									Voltar para a edição de endereço
								</Button>
							</Form>
						</>
					)}
			</Aside>
		</div>
	);
};

export default CartCheckout;
