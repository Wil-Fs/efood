import { styled } from 'styled-components';
import { Cores } from '../../styles';
import { Button } from '../Tag/style';
import scrap from '../../assets/images/lixeira.png';

export const OverLay = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.75);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`;

export const Aside = styled.aside`
	position: absolute;

	display: flex;
	flex-direction: column;
	max-width: 360px;
	width: 100%;
	height: 100%;
	right: 0;
	top: 0;
	background-color: ${Cores.fontColor};
	color: ${Cores.fontColor};
	overflow-y: auto;
	overflow-x: hidden;

	${Button} {
		display: flex;
		background-color: ${Cores.bgColorFooter};
		color: ${Cores.fontColor};
		justify-content: center;
		align-items: center;
		margin: 0 8px;
		font-weight: bold;
		font-size: 14px;
		height: 24px;
		margin-bottom: 72px;
	}

	&::-webkit-scrollbar {
		width: 0px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 50px;
		background: ${Cores.bgColor};
	}
	&::-webkit-scrollbar-track {
		background: ${Cores.fontColor};
	}
`;

export const List = styled.ul`
	max-width: 344px;
	width: 100%;
	margin: 32px 8px 34px 8px;
`;

export const Item = styled.li`
	width: 100%;
	max-height: 100px;
	margin-bottom: 16px;
	display: flex;
	background-color: ${Cores.bgColorFooter};

	position: relative;

	.food {
		width: 80px;
		height: 80px;
		margin: 8px 8px 12px 8px;
	}

	button {
		background-image: url(${scrap});
		background-size: cover;
		width: 16px;
		height: 16px;
		position: absolute;
		bottom: 8px;
		right: 8px;
		border: none;
		cursor: pointer;
	}

	h4 {
		margin: 8px 0 16px;
		font-size: 18px;
		font-weight: 900;
	}

	span {
		font-size: 14px;
	}
`;

export const ValueContainer = styled.div`
	display: flex;
	font-size: 14px;
	font-weight: bold;
	justify-content: space-between;
	margin: 16px 8px;
	color: ${Cores.bgColorFooter};
`;
