import { useRouter } from 'next/router'

const TodosItem : React.FC = (props) => {
    const router = useRouter();
    return <p style={{margin: '0'}}>{router.query.todoId}</p>
}
export default TodosItem;