import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Restaurante } from '../../pages/Home';
import { GalleryState } from '../../pages/RestaurantInfo';

export type CartState = {
	isOpen: boolean;
	itens: GalleryState[];
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
		addToCart: (state, action: PayloadAction<GalleryState>) => {
			const existFood = state.itens.find(
				(food) => food.id === action.payload.id
			);

			if (!existFood) {
				state.itens.push(action.payload);
			} else {
				alert('Pedido já adicionado!');
			}
		},
		removeToCart: (state, action: PayloadAction<number>) => {
			state.itens = state.itens.filter(
				(food) => food.id !== action.payload
			);
		},
		cleanCart: (state) => {
			state.itens = [];
		},
	},
});

export const { openCart, closeCart, addToCart, removeToCart, cleanCart } =
	cartSlice.actions;
export default cartSlice.reducer;
