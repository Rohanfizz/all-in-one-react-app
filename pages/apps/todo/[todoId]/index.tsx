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
	const item = todosArray.find(
		(item: TodoObj) => item.id === router.query.todoId
	);
	const content = item ? item.content : "404 not found";

	// return <p style={{margin: '0'}}>{router.query.todoId}</p>
	return (
		<Card className={classes.container}>
			<h1>{content}</h1>
		</Card>
	);
};
export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true, // false or 'blocking'
	};
}

export async function getStaticProps(context: any) {
	return {
		props: {},
	};
}
export default TodosItemDisplay;
