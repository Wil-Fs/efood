import styled from 'styled-components';
import { Link } from 'react-router-dom';

import heroImg from '../../assets/images/fundo.png';
import { Cores } from '../../styles';

export const Hero = styled.div`
	background-image: url(${heroImg});
	background-repeat: no-repeat;
	background-size: cover;

	.Container {
		display: flex;
		flex-direction: column;
	}
`;

export const Logo = styled(Link)`
	display: inline-block;
	padding-top: 64px;
	margin: 0 auto;
`;

export const Title = styled.h1`
	font-size: 36px;
	font-weight: bold;
	line-height: 42px;
	color: ${Cores.fontColor};
	padding: 260px 0 40px;
	max-width: 540px;
	text-align: center;
	margin: 0 auto;
`;
