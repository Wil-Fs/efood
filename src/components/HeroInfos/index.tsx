import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';
import * as S from './styles';
import { RootReducer } from '../../store';
import { openCart } from '../../store/reducers/cart';

import { useEffect, useState } from 'react';

type Props = {
	toLinkHome: string;
};

const HeroInfos = ({ toLinkHome }: Props) => {
	const { itens } = useSelector((state: RootReducer) => state.cart);
	const dispatch = useDispatch();

	const getWindowDimensions = () => {
		const { innerWidth: width } = window;

		return width;
	};

	const [windowWidth, setWindowWidth] = useState(getWindowDimensions());

	useEffect(() => {
		const handleResize = () => setWindowWidth(getWindowDimensions());

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<S.Hero>
			{windowWidth < 768 ? (
				<div className="containerMobile">
					<S.Logo to={'/'}>
						<img src={logo} />
					</S.Logo>
					<S.Title to={`${toLinkHome}`}>Restaurantes</S.Title>
					<S.CartLength onClick={() => dispatch(openCart())}>
						{itens.length} produto(s) no carrinho
					</S.CartLength>
				</div>
			) : (
				<div className={'Container'}>
					<S.Title to={`${toLinkHome}`}>Restaurantes</S.Title>
					<S.Logo to={'/'}>
						<img src={logo} />
					</S.Logo>
					<S.CartLength onClick={() => dispatch(openCart())}>
						{itens.length} produto(s) no carrinho
					</S.CartLength>
				</div>
			)}
		</S.Hero>
	);
};

export default HeroInfos;
