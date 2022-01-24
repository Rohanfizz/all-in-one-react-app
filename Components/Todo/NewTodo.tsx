import React from "react";
import useAuthForm from "../../hooks/use-auth-form";
import Card from "../Ui/Card";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (content: string) => void }> = (props) => {
	const {
		value: enteredTodo,
		onChangeHandler: todoonChangeHandler,
		reset: todoReset,
		valueIsValid: todoIsValid,
	} = useAuthForm((content: string) => content.length > 0);

	const onClickHandler = (e: React.MouseEvent) => {
		props.onAddTodo(enteredTodo);
		todoReset();
	};

	return (
		<Card className={classes.container}>
			<input type="text" onChange={todoonChangeHandler} />
			<button onClick={onClickHandler} disabled={!todoIsValid}>Add Task</button>
		</Card>
	);
};

export default NewTodo;
