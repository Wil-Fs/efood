import pizza from '../../assets/images/pizza.png';
import scrap from '../../assets/images/lixeira.png';
import { Aside, Item, List, OverLay, ValueContainer } from './styles';
import Tag from '../Tag';
import { RootReducer } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../../store/reducers/cart';

const Cart = () => {
	const { isOpen } = useSelector((state: RootReducer) => state.cart);
	const dispatch = useDispatch();
	console.log(isOpen);

	return (
		<div className={!isOpen ? 'overlayOpen' : ''}>
			<OverLay onClick={() => dispatch(closeCart())}>
				<Aside>
					<div>
						<List>
							<Item>
								<div>
									<img
										className="food"
										src={pizza}
										alt="pizza"
									/>
								</div>
								<div className="text">
									<h4>Pizza Marguerita</h4>
									<span>R$ 60.90</span>
								</div>
								<img className={'scrap'} src={scrap} alt="" />
							</Item>
							<Item>
								<div>
									<img
										className="food"
										src={pizza}
										alt="pizza"
									/>
								</div>
								<div className="text">
									<h4>Pizza Marguerita</h4>
									<span>R$ 60.90</span>
								</div>
								<img className={'scrap'} src={scrap} alt="" />
							</Item>
							<Item>
								<div>
									<img
										className="food"
										src={pizza}
										alt="pizza"
									/>
								</div>
								<div className="text">
									<h4>Pizza Marguerita</h4>
									<span>R$ 60.90</span>
								</div>
								<img className={'scrap'} src={scrap} alt="" />
							</Item>
						</List>
					</div>
					<ValueContainer>
						<h4>Valor Total</h4>
						<span>R$ 182.70</span>
					</ValueContainer>
					<Tag type="button">{['Continuar com a entrega']}</Tag>
				</Aside>
			</OverLay>
		</div>
	);
};

export default Cart;
