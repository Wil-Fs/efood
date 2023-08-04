import logo from '../../assets/images/logo.png';
import * as S from './styles';

const Hero = () => (
	<S.Hero>
		<div className={'Container'}>
			<S.Logo to={'/'}>
				<img src={logo} />
			</S.Logo>
			<S.Title>
				Viva experiências gastronômicas no conforto da sua casa
			</S.Title>
		</div>
	</S.Hero>
);

export default Hero;
