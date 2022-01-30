import React from "react";
import { useRouter } from 'next/router'
import {useDispatch} from 'react-redux';

import Card from "../Ui/Card";
import classes from "./TodoItem.module.css";
import TodoObj from "../../models/todo";
import {todoActions} from '../../store/todo-slice';

import DeleteIcon from "@material-ui/icons/Delete";

const TodoItem: React.FC<{ item: TodoObj}> = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const onDeleteTodo = (e: React.MouseEvent) => {
		e.preventDefault();
		dispatch(todoActions.deleteTodo(props.item.id));
	};

	const redirectTodo = (e:React.MouseEvent) => {
		router.push(`/apps/todo/${props.item.id}`);
	}

	return (
		<Card className={classes.container}>
			<h3 onClick={redirectTodo}>{props.item.content}</h3>
			<div onClick={onDeleteTodo}>
				<button><DeleteIcon />DELETE</button>
			</div>
		</Card>
	);
};

export default TodoItem;
