import { createGlobalStyle } from 'styled-components';

export const Cores = {
	fontColor: '#E66767',
	bgColor: '#FFF8F2',
	bgColorFooter: '#FFEBD9',
	bgColorRestaurantList: '#FFFFFF',
};

export const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style: none;
		font-family: 'Roboto', sans-serif;
	}

	.Container {
		max-width: 1024px;
		width: 100%;
		margin: 0 auto;
	}

`;
