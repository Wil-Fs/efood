import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurante } from '../../pages/Home';

export type CartState = {
	isOpen: boolean;
	itens: Restaurante[];
};

const initialState: CartState = {
	isOpen: false,
	itens: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		openCart: (state) => {
			state.isOpen = true;
		},
		closeCart: (state) => {
			state.isOpen = false;
		},
		addToCart: (state, action: PayloadAction<Restaurante[]>) => {
			for (let i = 0; i < state.itens.length; i++) {
				for (let f = 0; f < state.itens[i].cardapio.length; f++) {
					state.itens[i].cardapio.push(action.payload[i].cardapio[f]);
				}
			}
		},
	},
});

export const { openCart, closeCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
