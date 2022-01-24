import { useState } from "react";

const useAuthForm = (validationFn: (input: string) => boolean) => {
	const [enteredInput, setEnteredInput] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setEnteredInput(event.currentTarget.value);
	};

	const onBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredInput("");
		setIsTouched(false);
	};

	let valueIsValid = validationFn(enteredInput);
	const showError = isTouched && !valueIsValid;

	return {
		value: enteredInput,
		valueIsValid,
		showError,
		onChangeHandler,
		onBlurHandler,
		reset,
	};
};

export default useAuthForm;
