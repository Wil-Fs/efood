import { styled } from 'styled-components';
import { Cores } from '../../styles';

import { Button } from '../../components/Tag/style';

export const OverLay = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
`;

export const ModalContainer = styled.div`
	position: absolute;
	display: none;
	background-color: rgba(0, 0, 0, 0.75);
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	justify-content: center;
	align-items: center;

	&.visible {
		display: flex;
	}

	.modal {
		position: fixed;
		z-index: 2;
		top: 25%;
	}
`;

export const ModalContent = styled.div`
	display: flex;
	position: relative;
	height: 344px;
	background-color: ${Cores.fontColor};
	color: ${Cores.bgColorRestaurantList};

	> img {
		height: 280px;
		width: 280px;
		object-fit: cover;
		margin: 32px 24px 32px 32px;
	}

	.btnClose {
		position: absolute;
		width: 16px;
		height: 16px;
		top: 0;
		right: 0;
		margin: 8px;
		cursor: pointer;
	}

	.textContainer {
		margin: 32px 32px 32px 0;
	}

	h3 {
		margin-bottom: 16px;
		padding-top: 0;
	}

	p {
		margin-bottom: 16px;
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
	}

	${Button} {
		color: ${Cores.fontColor};
		background-color: ${Cores.bgColorFooter};
		font-size: 14px;
		font-weight: 700;
	}
`;