import { styled } from 'styled-components';
import { Cores } from '../../styles';
import { Button } from '../Tag/style';
import scrap from '../../assets/images/lixeira.png';

type InputGroupProps = {
	maxWidth?: string;
	margin?: string;
	display?: string;
};

export const OverLay = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.75);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`;

export const Aside = styled.aside`
	position: fixed;
	display: flex;
	flex-direction: column;
	max-width: 360px;
	width: 100%;
	height: 100%;
	right: 0;
	top: 0;
	background-color: ${Cores.fontColor};
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

	p {
		color: ${Cores.bgColorFooter};
		font-size: 16px;
		font-weight: bold;
		line-height: 22px;
		text-align: center;
		padding: 40px 0;
	}
`;

export const Cart = styled.div`
	color: ${Cores.fontColor};
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

export const Form = styled.form<InputGroupProps>`
	color: ${Cores.bgColorFooter};

	h3 {
		line-height: 18.75px;
		font-size: 16px;
		font-weight: bold;
		margin-left: 8px;
		margin-top: 32px;
	}

	${Button} {
		margin: 8px;
	}
`;

export const InputGroup = styled.div<InputGroupProps>`
	max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};
	margin: ${(props) => (props.margin ? props.margin : '8px')};
	display: ${(props) => (props.display ? props.display : 'block')};
	label {
	}

	input {
		height: 32px;
		background-color: ${Cores.bgColorFooter};
		color: #000;
		border: none;
		width: 100%;
		margin-top: 8px;
		padding: 8px;
	}
`;
