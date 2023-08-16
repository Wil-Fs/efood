import { styled } from 'styled-components';
import { Cores } from '../../styles';

export const Background = styled.div`
	background-color: ${Cores.bgColor};
`;

export const FoodList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 32px;
	padding: 56px 0 120px;
`;
