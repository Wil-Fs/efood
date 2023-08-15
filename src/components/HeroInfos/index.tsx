import logo from '../../assets/images/logo.png';
import * as S from './styles';

type Props = {
	toLinkHome: string;
	toLinkCar: string;
};

const HeroInfos = ({ toLinkHome, toLinkCar }: Props) => (
	<S.Hero>
		<div className={'Container'}>
			<S.Title to={`${toLinkHome}`}>Restaurantes</S.Title>
			<S.Logo to={'/'}>
				<img src={logo} />
			</S.Logo>
			<S.Title to={`${toLinkCar}`}>0 produto(s) no carrinho</S.Title>
		</div>
	</S.Hero>
);

export default HeroInfos;
