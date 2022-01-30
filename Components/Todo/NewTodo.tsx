import React from "react";
import {useDispatch} from 'react-redux';
import useAuthForm from "../../hooks/use-auth-form";
import { todoActions } from "../../store/todo-slice";	
import Card from "../Ui/Card";
import classes from "./NewTodo.module.css";
import TodoObj from "../../models/todo";

import ShortUniqueId from "short-unique-id";

const NewTodo: React.FC = (props) => {
	const dispatch = useDispatch();

	const uid = new ShortUniqueId({ length: 10 });
	const {
		value: enteredTodo,
		onChangeHandler: todoonChangeHandler,
		reset: todoReset,
		valueIsValid: todoIsValid,
	} = useAuthForm((content: string) => content.length > 0);

	const onAddTodo= (event: React.MouseEvent<HTMLButtonElement>) => {
		const content = enteredTodo;
		if (!content.length) return;
		// const newTodo = { id: uid(), content: content };
		const newTodo = new TodoObj(uid(),content);
		dispatch(todoActions.addTodo(newTodo));
		todoReset();
	};

	return (
		<Card className={classes.container}>
			<input type="text" onChange={todoonChangeHandler} value={enteredTodo}/>
			<button onClick={onAddTodo} disabled={!todoIsValid}>Add Task</button>
		</Card>
	);
};

export default NewTodo;
