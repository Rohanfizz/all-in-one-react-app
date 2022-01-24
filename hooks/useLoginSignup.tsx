import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const useLoginSignup = () => {
	//used for login and signup only, both are post requests
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();

	const sendRequest = useCallback(
		async (requestConfig: {
			type: string;
			body: {
				email: string;
				password: string;
				returnSecureToken: boolean;
			};
		}) => {
			setIsLoading(true);
			setError(false);
			let url: string = "";
			if (requestConfig.type === "login") {
				url =
					"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC23KyHp6FpseENY1kFLwZMs8XImN0EV6w";
			} else if (requestConfig.type === "signup") {
				url =
					"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC23KyHp6FpseENY1kFLwZMs8XImN0EV6w";
			}
			try {
				const response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(requestConfig.body),
				});

				const data = await response.json();
				console.log(data);

				if (!response.ok) {
					setError(true);
					throw new Error("Something went wrong!");
				}

				dispatch(
					authActions.login({
						token: data.idToken,
						email: data.email,
						expirationTime: data.expiresIn
					})
				);

			} catch (error: any) {
				alert(error.message);
			}
		},
		[]
	);
	return { isLoading, error, sendRequest };
};
export default useLoginSignup;
