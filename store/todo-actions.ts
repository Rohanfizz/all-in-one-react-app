import { todoActions } from "./todo-slice";
import {uiActions} from './ui-slice';
import TodoObj from "../models/todo";


const emailConverter = (mail: string) => {
    const a = mail.replace("@", "");
    const b = a.replace(".", "");
    console.log(b);
    return b;
};  

export const fetchTodoData = (email:string) => {
	// const todosStore = useSelector((state: RootStateOrAny) => state.todos);

	return async (dispatch: any) => {
		const fetchData = async () => {
			const response = await fetch(
				`https://all-in-one-react-app-default-rtdb.firebaseio.com/${emailConverter(
					email
				)}/todos.json`
			);
			if (!response.ok) {
				throw new Error("Error while fetching data");
			}
			const data = await response.json();
			return data;
		};

		dispatch(uiActions.showLoading());

		try {
			let uploadedTodos = await fetchData();
            uploadedTodos = uploadedTodos || [];
			console.log(uploadedTodos); 
			dispatch(todoActions.setTodos(uploadedTodos));
		} catch (error) {
			alert(error);
		}
		dispatch(uiActions.stopLoading());
	};
};

export const sendTodos = (todos: TodoObj[],email:string) => {
	return async (dispatch: any) => {


		const sendRequest = async ()=>{
            const response = await fetch(`https://all-in-one-react-app-default-rtdb.firebaseio.com/${emailConverter(
				email
			)}/todos.json`,{method:'PUT',body:JSON.stringify(todos)});

            if(!response.ok){   
                throw new Error('Error while sending data');
            }
        }
        try{ 
            await sendRequest();
        }catch(error){
            alert(error);
        }
	};
};
