import React from "react";
import useAuthForm from "../../hooks/use-auth-form";
import useChangePassword from "../../hooks/useChangePassword";
import classes from "./CredentialsInputForm.module.css";
import { RootStateOrAny, useSelector } from "react-redux";
import {useRouter} from "next/router";

const ChangePasswordForm: React.FC = (props) => {
    const router = useRouter();
	const { sendRequest: changePassword } = useChangePassword();
	const token = useSelector((state: RootStateOrAny) => state.auth.token);
	const passwordValidation = (password: string) => {
		return password.length >= 6;
	};
	const {
		value: passwordValue,
		valueIsValid: passwordvalueIsValid,
		showError: passwordshowError,
		onChangeHandler,
		onBlurHandler,
		reset: passwordreset,
	} = useAuthForm(passwordValidation);

	const onSubmithandler = async (e: React.FormEvent) => {
		e.preventDefault();
		await changePassword({
			body: {
				'idToken': token,
				'password': passwordValue,
				'returnSecureToken': false,
			},headers: { "Content-Type": "application/json" }
		});
        router.push('/');
	};

	return (
		<form className={classes.main} onSubmit={onSubmithandler}>
			<label>New Password</label>
			<input
				type="password"
				value={passwordValue}
				onChange={onChangeHandler}
				onBlur={onBlurHandler}
				className={
					passwordshowError
						? classes.inputError
						: classes.inputCorrect
				}
			></input>
			<button>Submit</button>
		</form>
	);
};

export default ChangePasswordForm;
