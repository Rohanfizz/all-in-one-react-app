import { createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// import localStorage from "redux-persist/lib/storage";
import { RootStateOrAny } from "react-redux";

let logoutTimer;
let userIsloggedIn: boolean = false;
let userEmail: string | null = null;

const calculateRemainingTime = (expirationTime: string) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();
	const remainingTime = adjExpirationTime - currentTime;
	return remainingTime;
};

const retrieveStoredToken = () => {
	const storedToken = typeof window !== "undefined"? localStorage.getItem("token"):null;
	const storedExpirationTime =  typeof window !== "undefined"? localStorage.getItem("expirationTime"):null;

	const remainingTime = calculateRemainingTime(
		storedExpirationTime ? storedExpirationTime : "0"
	);

	if (typeof window !== "undefined" && remainingTime <= 0) {
		localStorage.removeItem("token");
		localStorage.removeItem("expirationTime");
		localStorage.removeItem("email");
	}
	return { token: storedToken, expirationTime: remainingTime };
};

const setInitialToken = () => {
	const tokenData = retrieveStoredToken();
	const initialToken = tokenData.token ? tokenData.token : null;
	userIsloggedIn = !!initialToken;
	const email = typeof window !== "undefined"? localStorage.getItem("email"):null;
	return initialToken;
	// return {token:initialToken, email:email, isLoggedIn:userIsloggedIn};
};

const setInitialEmail =() => {
	const email = typeof window !== "undefined"? localStorage.getItem("email"):null;
	return email;
};

const setInitialLoggedIn = () => {
	const email = typeof window !== "undefined"? localStorage.getItem("email"):null;
	return email ? true : false;
};

const initialState: {
	token: string | null;
	email: string | null ;
	isLoggedIn: boolean ;
} = {
	token: setInitialToken(),
	email: setInitialEmail(),
	isLoggedIn: setInitialLoggedIn(),
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		login: (state: RootStateOrAny, action) => {
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.email = action.payload.email;

			localStorage.setItem("token", state.token);
			localStorage.setItem(
				"expirationTime",
				action.payload.expirationTime
			);
			localStorage.setItem("email", state.email);

			const remainingTime = calculateRemainingTime(
				action.payload.expirationTime
			);
			logoutTimer = setTimeout(authSlice.actions.logout, 100);
		},
		logout: (state) => {
			state.token = null;
			state.isLoggedIn = false;
			state.email = null;

			localStorage.removeItem("token");
			localStorage.removeItem("expirationTime");
			localStorage.removeItem("email");
		},
	},
});
export const authActions = authSlice.actions;
export default authSlice;
