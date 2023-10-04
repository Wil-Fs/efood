import {
	Aside,
	Cart,
	Form,
	InputGroup,
	Item,
	List,
	OverLay,
	PaymentSuccess,
	ValueContainer,
} from './styles';
import Tag from '../Tag';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart, closeCart, removeToCart } from '../../store/reducers/cart';
import { formatPrice } from '../FoodList';
import { useEffect, useState } from 'react';
import { Button } from '../Tag/style';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { usePurchaseMutation } from '../../services/api';

type Checkout = {
	cartHasItem: boolean;
	deliveryIsOpen: boolean;
	payment: boolean;
};

const CartCheckout = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [purchase, { data: orderId, isSuccess, isLoading, reset }] =
		usePurchaseMutation();

	const form = useFormik({
		initialValues: {
			receiver: '',
			descriptionAddress: '',
			city: '',
			zipCode: '',
			numberAddress: '',
			complementAddress: '',
			cardOwner: '',
			cardNumber: '',
			cardCode: '',
			expiresMonth: '',
			expiresYear: '',
		},
		validationSchema: Yup.object({
			receiver: Yup.string()
				.min(7, 'Informe pelo menos seu segundo nome')
				.required('O campo é obrigátorio'),
			descriptionAddress: Yup.string().required('Informe o endereço'),
			city: Yup.string().required(
				'Informe o nome da cidade onde será feita a entrega'
			),
			zipCode: Yup.string()
				.min(8, 'Informe o seu cep')
				.max(8, 'Tamanho do cep inválido')
				.required('O campo é obrigátorio'),
			numberAddress: Yup.string().required('O campo é obrigátorio'),
			cardOwner: Yup.string()
				.min(7, 'Informe o completo do propetário(a) do cartão')
				.required('O campo é obrigátorio'),
			cardNumber: Yup.string().required('O campo é obrigátorio'),
			expiresMonth: Yup.string().required('O campo é obrigátorio'),
			expiresYear: Yup.string().required('O campo é obrigátorio'),
			cardCode: Yup.string().required('O campo é obrigátorio'),
		}),
		onSubmit: (values) => {
			purchase({
				delivery: {
					receiver: values.receiver,
					address: {
						description: values.descriptionAddress,
						city: values.city,
						zipCode: values.zipCode,
						number: Number(values.numberAddress),
						complement: values.complementAddress,
					},
				},
				payment: {
					card: {
						name: values.cardOwner,
						number: values.cardNumber,
						code: Number(values.cardCode),
						expires: {
							month: Number(values.expiresMonth),
							year: Number(values.expiresYear),
						},
					},
				},
				products: itens.map((item) => ({
					id: item.id,
					price: item.preco,
				})),
			});
		},
	});

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

	const fiedHasError = (fieldName: string) => {
		const hasTouched = fieldName in form.touched;
		const isInvalid = fieldName in form.errors;
		const hasError = hasTouched && isInvalid;

		return hasError;
	};

	return (
		<div className={!isOpen ? 'overlayOpen' : ''}>
			<OverLay onClick={() => dispatch(closeCart())} />
			<Aside>
				{!checkout.cartHasItem && !isSuccess && !isLoading && (
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
					!checkout.payment &&
					!isSuccess && (
						<Cart>
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
						</Cart>
					)}
				{checkout.cartHasItem &&
					checkout.deliveryIsOpen &&
					!checkout.payment && (
						<Form onSubmit={form.handleSubmit}>
							<h3>Entrega</h3>
							<InputGroup>
								<label htmlFor="receiver">
									Quem irá receber?
								</label>
								<input
									type="text"
									name="receiver"
									id="receiver"
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									value={form.values.receiver}
									className={
										fiedHasError('receiver') ? 'error' : ''
									}
								/>
							</InputGroup>
							<InputGroup>
								<label htmlFor="descriptionAddress">
									Endereço
								</label>
								<input
									type="text"
									name="descriptionAddress"
									id="descriptionAddress"
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									value={form.values.descriptionAddress}
									className={
										fiedHasError('descriptionAddress')
											? 'error'
											: ''
									}
								/>
							</InputGroup>
							<InputGroup>
								<label htmlFor="city">Cidade</label>
								<input
									type="text"
									name="city"
									id="city"
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									value={form.values.city}
									className={
										fiedHasError('city') ? 'error' : ''
									}
								/>
							</InputGroup>
							<InputGroup display="flex">
								<InputGroup margin="0" maxWidth="155px">
									<label htmlFor="zipCode">CEP</label>
									<input
										type="text"
										name="zipCode"
										id="zipCode"
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										value={form.values.zipCode}
										className={
											fiedHasError('zipCode')
												? 'error'
												: ''
										}
									/>
								</InputGroup>
								<InputGroup
									margin="0 0 0 34px"
									maxWidth="155px"
								>
									<label htmlFor="numberAddress">
										Número
									</label>
									<input
										type="text"
										name="numberAddress"
										id="numberAddress"
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										value={form.values.numberAddress}
										className={
											fiedHasError('numberAddress')
												? 'error'
												: ''
										}
									/>
								</InputGroup>
							</InputGroup>
							<InputGroup margin="8px 8px 24px 8px">
								<label htmlFor="complementAddress">
									Complemento (opcional)
								</label>
								<input
									type="text"
									name="complementAddress"
									id="complementAddress"
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									value={form.values.complementAddress}
									className={
										fiedHasError('complementAddress')
											? 'error'
											: ''
									}
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
							<Form onSubmit={form.handleSubmit}>
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
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										value={form.values.cardOwner}
										className={
											fiedHasError('cardOwner')
												? 'error'
												: ''
										}
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
											onChange={form.handleChange}
											onBlur={form.handleBlur}
											value={form.values.cardNumber}
											className={
												fiedHasError('cardNumber')
													? 'error'
													: ''
											}
										/>
									</InputGroup>
									<InputGroup maxWidth="87px" margin="0">
										<label htmlFor="cardCode">CVV</label>
										<input
											type="text"
											id="cardCode"
											name="cardCode"
											onChange={form.handleChange}
											onBlur={form.handleBlur}
											value={form.values.cardCode}
											className={
												fiedHasError('cardCode')
													? 'error'
													: ''
											}
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
											onChange={form.handleChange}
											onBlur={form.handleBlur}
											value={form.values.expiresMonth}
											className={
												fiedHasError('expiresMonth')
													? 'error'
													: ''
											}
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
											onChange={form.handleChange}
											onBlur={form.handleBlur}
											value={form.values.expiresYear}
											className={
												fiedHasError('expiresYear')
													? 'error'
													: ''
											}
										/>
									</InputGroup>
								</InputGroup>
								<Button
									type="submit"
									to=""
									onClick={() => {
										changeCheckOut(true, false, false);
										form.handleSubmit();
									}}
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
				{isSuccess && orderId && checkout.cartHasItem && (
					<PaymentSuccess>
						<h3>Pedido realizado - {orderId.orderId}</h3>
						<p className="textOrder">
							Estamos felizes em informar que seu pedido já está
							em processo de preparação e, em breve, será entregue
							no endereço fornecido.
						</p>
						<p className="textOrder">
							Gostaríamos de ressaltar que nossos entregadores não
							estão autorizados a realizar cobranças extras.
						</p>

						<p className="textOrder">
							Lembre-se da importância de higienizar as mãos após
							o recebimento do pedido, garantindo assim sua
							segurança e bem-estar durante a refeição.
						</p>
						<p className="textOrder">
							Esperamos que desfrute de uma deliciosa e agradável
							experiência gastronômica. Bom apetite!
						</p>
						<Button
							to=""
							onClick={() => {
								dispatch(cleanCart());
								dispatch(closeCart());
								reset();
							}}
						>
							Concluir
						</Button>
					</PaymentSuccess>
				)}
			</Aside>
		</div>
	);
};

export default CartCheckout;
