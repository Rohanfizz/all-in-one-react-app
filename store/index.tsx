import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import moviesSlice from "./movies-slice";
import uiSlice from './ui-slice';
import todoSlice from "./todo-slice";
import reduxUpdationSlice from "./redux-updations"

const store = configureStore({
	reducer: {
		todo: todoSlice.reducer,
		auth: authSlice.reducer,
		movies: moviesSlice.reducer,
		ui: uiSlice.reducer,
		reduxUpdation: reduxUpdationSlice.reducer
	},
});

export default store;
