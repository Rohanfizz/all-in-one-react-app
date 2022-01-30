import React from "react";
import useAuthForm from "../../hooks/use-auth-form";
import classes from "./CredentialsInputForm.module.css";
import useLoginSignup from "../../hooks/useLoginSignup";
import { useRouter } from "next/router";

const CredentialsInputForm: React.FC<{ query: string }> = (props) => {
	const router = useRouter();
	const emailValidation = (email: string) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
			? true
			: false;
	};

	const passwordValidation = (password: string) => {
		return password.length >= 6;
	};

	const {
		value: emailValue,
		valueIsValid: emailvalueIsValid,
		showError: emailshowError,
		onChangeHandler: emailonChangeHandler,
		onBlurHandler: emailonBlurHandler,
		reset: emailreset,
	} = useAuthForm(emailValidation);

	const {
		value: passwordValue,
		valueIsValid: passwordvalueIsValid,
		showError: passwordshowError,
		onChangeHandler: passwordonChangeHandler,
		onBlurHandler: passwordonBlurHandler,
		reset: passwordreset,
	} = useAuthForm(passwordValidation);

	const { isLoading, error, sendRequest } = useLoginSignup();

	const onSubmitHandler = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const done = await sendRequest({
			type: props.query,
			body: {
				email: emailValue,
				password: passwordValue,
				returnSecureToken: true,
			},
		});
		// console.log(error);
		if(done)router.push("/");
	};

	return (
		<form className={classes.main} onSubmit={onSubmitHandler}>
			<label>Email</label>
			<input
				type="email"
				value={emailValue}
				onChange={emailonChangeHandler}
				onBlur={emailonBlurHandler}
				className={
					emailshowError ? classes.inputError : classes.inputCorrect
				}
			></input>
			<label>Password</label>
			<input
				type="password"
				value={passwordValue}
				onChange={passwordonChangeHandler}
				onBlur={passwordonBlurHandler}
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

export default CredentialsInputForm;
