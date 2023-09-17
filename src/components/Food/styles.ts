import styled from 'styled-components';
import { BreakPoint, Cores } from '../../styles';
import { Button } from '../Tag/style';

export const Card = styled.li`
	display: flex;
	flex-direction: column;
	max-width: 320px;
	background-color: ${Cores.fontColor};
	color: ${Cores.bgColorFooter};

	${Button} {
		font-size: 14px;
		font-weight: 700;
		line-height: 16px;
		text-align: center;
		color: ${Cores.fontColor};
		background-color: ${Cores.bgColorFooter};
		width: 100%;
		margin: 8px 0;
	}
`;

export const DescriptionContainer = styled.div`
	margin: 0 auto;
	display: inline-flex;
	flex-direction: column;
	max-width: 304px;

	@media (max-width: ${BreakPoint.desktop}) {
		max-width: 275px;
	}
`;

export const Image = styled.img`
	width: 100%;
	padding: 8px;
	max-height: 167px;
`;

export const Title = styled.h4`
	font-size: 16px;
	font-weight: 900;
	line-height: 18px;
	display: block;
	padding-bottom: 8px;
`;

export const Description = styled.p`
	font-size: 14px;
	line-height: 22px;
	font-weight: 400;
	width: 100%;
`;
