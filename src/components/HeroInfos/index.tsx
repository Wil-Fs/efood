import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';
import * as S from './styles';
import { RootReducer } from '../../store';
import { openCart } from '../../store/reducers/cart';

type Props = {
	toLinkHome: string;
};

const HeroInfos = ({ toLinkHome }: Props) => {
	const { itens } = useSelector((state: RootReducer) => state.cart);
	const dispatch = useDispatch();

	return (
		<S.Hero>
			<div className={'Container'}>
				<S.Title to={`${toLinkHome}`}>Restaurantes</S.Title>
				<S.Logo to={'/'}>
					<img src={logo} />
				</S.Logo>
				<S.CartLength onClick={() => dispatch(openCart())}>
					{itens.length} produto(s) no carrinho
				</S.CartLength>
			</div>
		</S.Hero>
	);
};

export default HeroInfos;
