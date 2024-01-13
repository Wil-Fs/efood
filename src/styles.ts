import { createGlobalStyle } from 'styled-components';

export const Cores = {
	fontColor: '#e66767',
	bgColor: '#fff8ef',
	bgColorFooter: '#ffebd9',
	bgColorRestaurantList: '#fff',
};

export const BreakPoint = {
	tablet: '768px',
	desktop: '1024px',
};

export const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style: none;
		font-family: 'Roboto', sans-serif;

		&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-thumb {
		
		background: ${Cores.bgColorFooter};
	}
	&::-webkit-scrollbar-track {
		background: ${Cores.fontColor};
	}

	}

	.Container {
		max-width: 1024px;
		width: 100%;
		margin: 0 auto;

		@media (max-width: ${BreakPoint.desktop}) {
			width: 80%;
		}

		@media (max-width: ${BreakPoint.tablet}) {
			margin: 0 auto;
			width: 83%;
		}
	}

	.overlayOpen{
		display: none;
	}

`;
