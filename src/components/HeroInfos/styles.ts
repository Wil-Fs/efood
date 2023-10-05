import styled from 'styled-components';
import { Link } from 'react-router-dom';

import heroImg from '../../assets/images/fundo.png';
import { BreakPoint, Cores } from '../../styles';

export const Hero = styled.div`
	background-image: url(${heroImg});
	background-repeat: no-repeat;
	background-size: cover;

	.Container {
		display: flex;
		justify-content: space-between;
	}

	.containerMobile {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
	}
`;

export const Logo = styled(Link)`
	display: inline-block;
	padding-top: 64px;
	margin: 0 auto;
`;

export const Title = styled(Link)`
	font-size: 18px;
	font-weight: bold;
	line-height: 21px;
	color: ${Cores.fontColor};
	padding: 80px 0 80px;
	text-align: center;

	@media (max-width: ${BreakPoint.tablet}) {
		padding: 32px 0 32px;
	}

	@media (min-width: ${BreakPoint.tablet}) {
		padding: 80px 0 80px;
	}
`;

export const CartLength = styled.h4`
	font-size: 18px;
	font-weight: bold;
	line-height: 21px;
	color: ${Cores.fontColor};
	padding: 80px 0 80px;
	text-align: center;
	cursor: pointer;

	@media (max-width: ${BreakPoint.tablet}) {
		padding: 32px 0 32px;
	}

	@media (min-width: ${BreakPoint.tablet}) {
		padding: 80px 0 80px;
	}
`;
