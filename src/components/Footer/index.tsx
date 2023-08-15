import logo from '../../assets/images/logo.png';

import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';
import {
	LinkSocialMedia,
	Logo,
	Footer as Sfooter,
	Socialmedia,
	Text,
} from './styles';

const Footer = () => (
	<Sfooter>
		<Logo to={'/'}>
			<img src={logo} />
		</Logo>
		<Socialmedia>
			<LinkSocialMedia to={'https://www.instagram.com'}>
				<img src={instagram} />
			</LinkSocialMedia>
			<LinkSocialMedia to={'https://www.facebook.com'}>
				<img src={facebook} />
			</LinkSocialMedia>
			<LinkSocialMedia to={'https://www.twitter.com'}>
				<img src={twitter} />
			</LinkSocialMedia>
		</Socialmedia>
		<Text>
			A efood é uma plataforma para divulgação de estabelecimentos, a
			responsabilidade pela entrega, qualidade dos produtos é toda do
			estabelecimento contratado.
		</Text>
	</Sfooter>
);

export default Footer;
