import { createSlice } from "@reduxjs/toolkit";

let logoutTimer;

const calculateRemainingTime=(expirationTime: number) =>{
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();
	const remainingTime = adjExpirationTime - currentTime;
	return remainingTime;
}

const retrieveStoredToken = () => {
	const storedToken = localStorage.getItem("token");
	const storedExpirationTime = localStorage.getItem("expirationTime");

	const remainingTime = calculateRemainingTime(storedExpirationTime?+storedExpirationTime:0);
	if (remainingTime <= 0) {
		localStorage.removeItem("token");
		localStorage.removeItem("expirationTime");
	}
	return { token: storedToken, expirationTime: remainingTime };
};

const setInitialToken = ()=>{
	const tokenData = retrieveStoredToken();
	const initialToken = tokenData.token?tokenData.token:null;
	return initialToken;
}

const initialState: { token: string | null;email:string; isLoggedIn: boolean } = {
	token: setInitialToken(),
	email:"",
	isLoggedIn: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		login: (state, action) => {
			state.token = action.payload.token;
			state.isLoggedIn = true;
			state.email = action.payload.email;

			localStorage.setItem('token',state.token);
			localStorage.setItem('expirationTime',action.payload.expirationTime);

			const remainingTime = calculateRemainingTime(+action.payload.expirationTime);
			logoutTimer = setTimeout(authSlice.actions.logout,remainingTime);
		},
        logout: (state)=>{
            state.token = "";
            state.isLoggedIn = false;
			state.email = "";
        }
	},
});
export const authActions = authSlice.actions;
export default authSlice;