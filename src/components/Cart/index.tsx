import { Aside, Item, List, OverLay, ValueContainer } from './styles';
import Tag from '../Tag';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, removeToCart } from '../../store/reducers/cart';
import { formatPrice } from '../FoodList';

const Cart = () => {
	const { isOpen, itens } = useSelector((state: RootReducer) => state.cart);
	const dispatch = useDispatch();

	const getFullPrice = () => {
		let price = 0;

		for (let i = 0; i < itens.length; i++) {
			price += itens[i].preco;
		}

		return price;
	};

	return (
		<div className={!isOpen ? 'overlayOpen' : ''}>
			<OverLay onClick={() => dispatch(closeCart())} />
			<Aside>
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
									<span>{formatPrice(item.preco)}</span>
								</div>
								<button
									onClick={() =>
										dispatch(removeToCart(item.id))
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
				<Tag type="button">{['Continuar com a entrega']}</Tag>
			</Aside>
		</div>
	);
};

export default Cart;
