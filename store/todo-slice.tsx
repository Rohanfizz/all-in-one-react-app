import { createSlice } from "@reduxjs/toolkit";

import TodoObj from "../models/todo";

const initState: {todoItems:TodoObj[]} = {todoItems:[]};

const todoSlice = createSlice({
	name: "todo",
	initialState: initState,
	reducers: {
		addTodo: (state, action) => {
			state.todoItems.push(action.payload);
		},
		deleteTodo: (state, action) => {
			state.todoItems = state.todoItems.filter((t) => t.id !== action.payload);
		},
	},
});

export const todoActions = todoSlice.actions;
export default todoSlice;