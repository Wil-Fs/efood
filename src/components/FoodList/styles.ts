import { styled } from 'styled-components';
import { BreakPoint, Cores } from '../../styles';

export const Background = styled.div`
	background-color: ${Cores.bgColor};
`;

export const FoodList = styled.ul`
	display: grid;

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
		gap: 0;
		row-gap: 32px;
		margin: 0 auto;
		width: auto;
		max-width: 320px;
		padding: 56px 0 120px;
	}

	@media (min-width: ${BreakPoint.tablet}) {
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;
		width: 100%;
		padding: 56px 0 120px;
	}

	@media (min-width: ${BreakPoint.desktop}) {
		gap: 32px;
		padding: 56px 0 120px;
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const ModalContainer = styled.div`
	position: fixed;
	display: none;
	background-color: rgba(0, 0, 0, 0.75);
	height: 100vh;
	width: 100%;
	top: 0;
	left: 0;
	justify-content: center;
	align-items: center;
	z-index: 3;

	&.visible {
		display: flex;
	}

	.modal {
		position: fixed;
		z-index: 2;
		top: 25%;

		@media (max-width: ${BreakPoint.tablet}) {
			top: 10%;
		}
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

		@media (max-width: ${BreakPoint.tablet}) {
			margin-left: 8px;
		}
	}

	p {
		margin-bottom: 16px;
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;

		@media (max-width: ${BreakPoint.tablet}) {
			margin-left: 8px;
		}
	}

	.serve {
		display: block;
		margin-bottom: 20px;

		@media (max-width: ${BreakPoint.tablet}) {
			margin-left: 8px;
		}
	}

	@media (max-width: ${BreakPoint.tablet}) {
		display: block;
		height: auto;
		img {
			width: 100%;
			margin: 0;
		}
	}

	@media (min-width: ${BreakPoint.tablet}) {
		font-size: 14px;
		height: auto;
		p {
			font-size: 12px;
		}

		display: flex;

		> img {
			height: 280px;
			width: 280px;
			object-fit: cover;
			margin: 32px 24px 32px 32px;
		}
	}
`;

export const BtnCart = styled.button`
	color: ${Cores.fontColor};
	background-color: ${Cores.bgColorFooter};
	font-size: 14px;
	font-weight: 700;
	padding: 6px 4px;
	background-color: ${Cores.bgColorFooter};
	cursor: pointer;
	border: none;

	@media (max-width: ${BreakPoint.tablet}) {
		margin: 8px;
	}

	@media (max-width: ${BreakPoint.desktop}) {
		margin-top: 10px;
	}
`;
