import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
	openPage: false
};

export const openGamePageSlice = createSlice({
	name: 'openGamePage',
	initialState,
	reducers: {
		openGame: (state, action) => {
			state.value.push(action.payload);

			state.openPage = !state.openPage;
		},
		removeOpenGame: (state) => {
			state.value = state.value.slice(1);
		}
	}
});

export const { openGame, removeOpenGame } = openGamePageSlice.actions;

export default openGamePageSlice.reducer;
