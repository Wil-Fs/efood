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
	carHasItem: boolean;
	checkoutIsOpen: boolean;
	payment: boolean;
};

const CartCheckout = () => {
	const { isOpen, itens } = useSelector((state: RootReducer) => state.cart);
	const dispatch = useDispatch();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [checkout, setCheckout] = useState<Checkout>({
		carHasItem: false,
		checkoutIsOpen: false,
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
		itens.length > 0
			? setCheckout({
					carHasItem: true,
					checkoutIsOpen: false,
					payment: false,
			  })
			: setCheckout({
					carHasItem: false,
					checkoutIsOpen: false,
					payment: false,
			  });
	}, [itens]);

	return (
		<div className={!isOpen ? 'overlayOpen' : ''}>
			<OverLay onClick={() => dispatch(closeCart())} />
			<Aside>
				{checkout.carHasItem && checkout.checkoutIsOpen ? (
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
								<label htmlFor="destinatarioNome">CEP</label>
								<input
									type="text"
									name="destinatarioNome"
									id="destinatarioNome"
								/>
							</InputGroup>
							<InputGroup margin="0 0 0 34px" maxWidth="155px">
								<label htmlFor="destinatarioNome">Número</label>
								<input
									type="text"
									name="destinatarioNome"
									id="destinatarioNome"
								/>
							</InputGroup>
						</InputGroup>
						<InputGroup>
							<label htmlFor="destinatarioNome">
								Complemento (opcional)
							</label>
							<input
								type="text"
								name="destinatarioNome"
								id="destinatarioNome"
							/>
						</InputGroup>
						<Button to="">Continuar com o pagamento</Button>
						<Button to="">Voltar para o carrinho</Button>
					</Form>
				) : (
					<Cart>
						{itens.length > 0 ? (
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
									<span>{formatPrice(getFullPrice())}</span>
								</ValueContainer>
								<Tag type="button">
									{['Continuar com a entrega']}
								</Tag>
							</>
						) : (
							<div>
								<p>
									O carrinho está vazio, por favor adicione
									algum produto!
								</p>
							</div>
						)}
					</Cart>
				)}
			</Aside>
		</div>
	);
};

export default CartCheckout;
