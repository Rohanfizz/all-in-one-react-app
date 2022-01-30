import { useCallback } from "react";

const useChangePassword = () => {
	const sendRequest = useCallback(
		async (requenstConfig: {
			body: {
				idToken: string;
				password: string;
				returnSecureToken: boolean;
			},headers:any;
		}) => {
            console.log(requenstConfig);
			try {
				const response = await fetch(
					"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC23KyHp6FpseENY1kFLwZMs8XImN0EV6w",
					{
						method: "POST",
						body: JSON.stringify(requenstConfig.body),
                        headers: requenstConfig.headers
					}
				);
                console.log(response);
				if (!response.ok) {
					throw new Error("Trouble while trying to change password");
				}
			} catch (err) {
				alert(err);
			}
		},
		[]
	);
    return {sendRequest};
};
export default useChangePassword;
