import { createSlice } from "@reduxjs/toolkit";

const initialState: { targetNumber: number } = { targetNumber: 0 };

const reduxUpdationSlice = createSlice({
	name: "reduxUpdations",
	initialState: initialState,
	reducers: {
		incrementNumber: (state) => {
			state.targetNumber++;
		},
		decrementNumber: (state) => {
			state.targetNumber--;
		},
		incrementByX: (state, actions) => {
			state.targetNumber += actions.payload;
		},
		resetNumber: (state) => {
			state.targetNumber = 0;
		},
	},
});

export const reduxUpdationActions = reduxUpdationSlice.actions;
export default reduxUpdationSlice;
