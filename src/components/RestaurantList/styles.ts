import styled from 'styled-components';
import { Cores } from '../../styles';

export const RestaurantContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 80px 40px;
	padding-top: 80px;
	padding-bottom: 120px;
	background-color: ${Cores.bgColor};
	padding-bottom: 120px;
`;
