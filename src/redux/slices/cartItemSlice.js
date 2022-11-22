import { createSlice } from '@reduxjs/toolkit';

const value = localStorage.getItem("cartItems") != null ? JSON.parse(localStorage.getItem("cartItems")):[]

const initialState = {
	value: value,
	exist: false,
	stayOnPage: false
};
export const cartItemSlice = createSlice({
	name: 'cartItem',
	initialState,
	reducers: {
		addCartItem: (state, action) => {
			// const inCart = state.value.find((item) => item.id === action.payload.id);
			state.value.push(action.payload);
			state.exist = !state.exist;
			state.stayOnPage = false;
			// if (!inCart) {

			// } else {
			// 	state.stayOnPage = true;
			// }
			localStorage.setItem('cartItems', JSON.stringify(state.value.map(item=>item)))
		},
		setStayOnPage:(state)=>{
			state.stayOnPage=true
		},
		removeCartItem: (state, action) => {
			state.value.splice(action.payload, 1);
			localStorage.setItem('cartItems', JSON.stringify(state.value.map(item=>item)))
		},
		popUpOk: (state, action) => {
			state.stayOnPage = action.payload;
		},
		removeAllCartItems: (state) => {
			localStorage.removeItem('cartItems');
			state.value = [];
		}
	}
});

export const { addCartItem, removeCartItem, popUpOk, removeAllCartItems,setStayOnPage } = cartItemSlice.actions;

export default cartItemSlice.reducer;
