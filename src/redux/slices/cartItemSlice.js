import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
	exist: false,
	stayOnPage: false
};
export const cartItemSlice = createSlice({
	name: 'cartItem',
	initialState,
	reducers: {
		addCartItem: (state, action) => {
			const inCart = state.value.find((item) => item.id === action.payload.id);
			if (!inCart) {
				state.value.push(action.payload);

				state.exist = !state.exist;
				state.stayOnPage = false;
			} else {
				state.stayOnPage = true;
			}
		},
		removeCartItem: (state, action) => {
			state.value.splice(action.payload, 1);
		},
		popUpOk: (state, action) => {
			state.stayOnPage = action.payload;
		},
		removeAllCartItems: (state) => {
		
			state.value = [];
		}
	}
});

export const { addCartItem, removeCartItem, popUpOk, removeAllCartItems } = cartItemSlice.actions;

export default cartItemSlice.reducer;
