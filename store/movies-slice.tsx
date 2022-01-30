import { createSlice } from "@reduxjs/toolkit";

const initialState: { fav: string[], changed: boolean } = {
	fav: [],
	changed: false,
    
};

const moviesSlice = createSlice({
	name: "movies",
	initialState: initialState,
	reducers: {
		addFavorite: (state, action) => {
			state.fav.push(action.payload);
			state.changed = true;
		},
		removeFavorite: (state, action) => {
			state.fav = state.fav.filter((cid) => cid !== action.payload);
			state.changed = true;
		},
		setFavorite: (state, action) => {
			state.fav = action.payload;
		},
	},
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
