import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import NewTodo from "../../../Components/Todo/NewTodo";
import TodoItem from "../../../Components/Todo/TodoItem";
import TodoObj from "../../../models/todo";
import { useEffect } from "react";
import { fetchTodoData, sendTodos } from "../../../store/todo-actions";
import ReactLoading from 'react-loading';
import { useRouter } from "next/router";

let isInitial = true;

const Todos: React.FC = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const email = useSelector((state: RootStateOrAny) => state.auth.email);
	const todoSlice: { todoItems: TodoObj[]; changed: boolean } = useSelector(
		(state: RootStateOrAny) => state.todo
	);
	const isLoading = useSelector((state:RootStateOrAny) => state.ui.isLoading);

	
	useEffect(() => {
		if(!email){
			router.replace('/auth');
		}
	},[]);


	useEffect(() => {
		dispatch(fetchTodoData(email));
		
	}, []);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (todoSlice.changed) {
			dispatch(sendTodos(todoSlice.todoItems, email));
		}
	}, [todoSlice]);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<NewTodo />
			{isLoading && <ReactLoading type={'cylon'} color={'white'} width="20%" />}
			{todoSlice.todoItems.map((todo) => {
				return <TodoItem key={todo.id} item={todo} />;
			})}
		</div>
	);
};

export default Todos;
