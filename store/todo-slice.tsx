import { createSlice } from "@reduxjs/toolkit";

import TodoObj from "../models/todo";

const initState: { todoItems: TodoObj[], changed: boolean } = {
	todoItems: [],
	changed: false,
};

const todoSlice = createSlice({
	name: "todo",
	initialState: initState,
	reducers: {
		addTodo: (state, action) => {
			state.todoItems.push(action.payload);
			state.changed = true;
		},
		deleteTodo: (state, action) => {
			state.todoItems = state.todoItems.filter(
				(t) => t.id !== action.payload
			);
			state.changed = true;
		},
		setTodos: (state, action) => {
			state.todoItems = action.payload;
			state.changed = true;
		},
	},
});

export const todoActions = todoSlice.actions;
export default todoSlice;
