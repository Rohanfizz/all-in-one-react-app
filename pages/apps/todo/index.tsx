import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import NewTodo from "../../../Components/Todo/NewTodo";
import TodoItem from "../../../Components/Todo/TodoItem";
import TodoObj from "../../../models/todo";
import ShortUniqueId from "short-unique-id";
import { todoActions } from "../../../store/todo-slice";

const Todos: React.FC = (props) => {
	const dispatch = useDispatch();
	const todoItems: TodoObj[] = useSelector(
		(state: RootStateOrAny) => state.todo.todoItems
	);
	const uid = new ShortUniqueId({ length: 10 });

	const onAddTodo = (content: string) => {
		if (!content.length) return;
		const newTodo = new TodoObj(uid(), content);
		dispatch(todoActions.addTodo(newTodo));
	};
	const onDeleteTodo = (id: string) => {
		dispatch(todoActions.deleteTodo(id));
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<NewTodo onAddTodo={onAddTodo} />
			{todoItems.map((todo) => {
				return <TodoItem key={todo.id} item={todo} onDeleteTodo={onDeleteTodo} />;
			})}
		</div>
	);
};
export default Todos;
