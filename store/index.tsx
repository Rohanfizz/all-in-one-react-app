import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";

import todoSlice from "./todo-slice";

const store = configureStore({
	reducer: { todo: todoSlice.reducer, auth: authSlice.reducer },
});

export default store;
