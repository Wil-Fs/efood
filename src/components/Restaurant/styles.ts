import styled from 'styled-components';

import { Props } from '.';
import { Cores } from '../../styles';
import { Button, Tags } from '../Tag/style';

export const Card = styled.li`
	width: 100%;
	max-width: 472px;
	position: relative;
	color: ${Cores.fontColor};

	.textContainer {
		display: flex;
		justify-content: space-between;
	}

	.tagContainer {
		display: inline-flex;
		position: absolute;
		top: 16px;
		right: 16px;
		${Tags} {
			margin-left: 8px;
			color: ${Cores.bgColorFooter};
		}
	}
`;

export const SecondContainer = styled.div`
	padding-bottom: 10px;
	border: 1px solid ${Cores.fontColor};
	border-top: none;
	background-color: ${Cores.bgColorRestaurantList};

	${Button} {
		margin: 8px;
		color: ${Cores.bgColorFooter};
	}
`;

export const Image = styled.div<
	Omit<Props, 'title' | 'infos' | 'description' | 'review' | 'to'>
>`
	width: 100%;
	height: 217px;
	background-image: url(${(props) => props.image});
	background-repeat: no-repeat;
`;

export const Title = styled.h3`
	display: flex;
	font-size: 18px;
	font-weight: bold;
	line-height: 22px;
	margin: 8px;
	text-align: center;

	.star {
		margin-left: 8px;
	}
`;

export const Review = styled(Title)``;

export const Description = styled.p`
	font-size: 14px;
	line-height: 22px;
	margin: 16px 8px 16px;
`;
