import styled from 'styled-components';

import { Cores } from '../../styles';

export const Banner = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
`;

export const Blur = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
`;

export const CategoryTitle = styled.h3`
	font-size: 32px;
	line-height: 37px;
	font-weight: 100;
	color: ${Cores.bgColorRestaurantList};
	padding-top: 24px;
	filter: brightness(100%);
`;

export const RestaurantTitle = styled(CategoryTitle)`
	font-weight: 900;
	padding: 132px 0 32px;
`;
