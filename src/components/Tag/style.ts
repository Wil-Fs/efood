import styled from 'styled-components';
import { Cores } from '../../styles';
import { Link } from 'react-router-dom';

export const Tag = styled.div`
	padding: 6px 4px;
	background-color: ${Cores.fontColor};
`;

export const Button = styled(Link)`
	padding: 6px 4px;
	background-color: ${Cores.fontColor};
	cursor: pointer;
`;
