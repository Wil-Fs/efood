import styled from 'styled-components';
import { BreakPoint, Cores } from '../../styles';

export const RestaurantContainer = styled.ul`
	display: grid;

	grid-gap: 80px 40px;
	padding-top: 80px;
	padding-bottom: 120px;
	background-color: ${Cores.bgColor};
	padding-bottom: 120px;

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
		margin: 0 auto;
		max-width: 472px;
	}

	@media (min-width: ${BreakPoint.tablet}) {
		max-width: 472px;
		grid-template-columns: 1fr;
		margin: 0 auto;
	}

	@media (min-width: ${BreakPoint.desktop}) {
		grid-template-columns: repeat(2, 1fr);
		max-width: 100%;
		width: 100%;
	}
`;
