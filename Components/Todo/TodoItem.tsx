import React from "react";
import { useRouter } from 'next/router'


import Card from "../Ui/Card";
import classes from "./TodoItem.module.css";
import TodoObj from "../../models/todo";

import DeleteIcon from "@material-ui/icons/Delete";

const TodoItem: React.FC<{ item: TodoObj,onDeleteTodo: (id:string) => void}> = (props) => {

	const router = useRouter();

	const onClickHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		props.onDeleteTodo(props.item.id);
	};

	const redirectTodo = (e:React.MouseEvent) => {
		router.push(`/apps/todo/${props.item.id}`);
	}

	return (
		<Card className={classes.container}>
			<h3 onClick={redirectTodo}>{props.item.content}</h3>
			<div onClick={onClickHandler}>
				<button><DeleteIcon />DELETE</button>
			</div>
		</Card>
	);
};

export default TodoItem;
