import { useRouter } from "next/router";
import TodoItem from "../../../../Components/Todo/TodoItem";
import { useSelector, RootStateOrAny } from "react-redux";
import TodoObj from "../../../../models/todo";
import Card from "../../../../Components/Ui/Card";
import classes from "./todoId.module.css";

const TodosItemDisplay: React.FC = (props) => {
	const router = useRouter();
	const todosArray = useSelector(
		(state: RootStateOrAny) => state.todo.todoItems
	);
	console.log(todosArray);

	// return <p style={{margin: '0'}}>{router.query.todoId}</p>
	return (
		<Card className={classes.container}>
			<h1>
				{
					todosArray.find(
						(item: TodoObj) => item.id === router.query.todoId
					).content
				}
			</h1>
		</Card>
	);
};
export default TodosItemDisplay;
