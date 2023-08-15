import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Cores } from '../../styles';

export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${Cores.bgColorFooter};
	color: ${Cores.fontColor};
`;

export const Logo = styled(Link)`
	padding-top: 40px;
	margin: 0 auto;
	padding-bottom: 32px;
`;

export const Socialmedia = styled.div`
	display: inline-flex;
	padding-bottom: 80px;
	width: 100px;
	margin: 0 auto;
`;

export const LinkSocialMedia = styled(Link)`
	margin-left: 8px;
`;

export const Text = styled.p`
	margin: 0 auto;
	margin-bottom: 40px;
	text-align: center;
	width: 50%;
`;
