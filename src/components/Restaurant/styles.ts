import styled from 'styled-components';

import { Props } from '.';

export const Card = styled.div`
	width: 100%;
	max-width: 472px;
`;

export const Image = styled.div<
	Omit<Props, 'title' | 'infos' | 'description' | 'review'>
>`
	background-image: url(${(props) => props.image});
	background-repeat: no-repeat;
	background-size: contain;
	position: relative;
`;

export const Title = styled.h3`
	font-size: 18px;
	font-weight: bold;
	line-height: 22px;
`;

export const Review = styled(Title)``;

export const Description = styled.p`
	font-size: 14px;
	line-height: 22px;
`;
