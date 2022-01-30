import { moviesActions } from "./movies-slice";
import {uiActions} from './ui-slice';
const emailConverter = (mail: string) => {
	const a = mail.replace("@", "");
	const b = a.replace(".", "");
	console.log(b);
	return b;
};

export const fetchMovies = (email: string) => {
	return async (dispatch: any) => {
		const fetchData = async () => {
			const response = await fetch(
				`https://all-in-one-react-app-default-rtdb.firebaseio.com/${emailConverter(
					email
				)}/fav.json`
			);
			if (!response.ok) {
				throw new Error(
					"Something went wrong while fetching favorite movies!"
				);
			}
			const data = await response.json();
			return data;
		};

		try {
			let favMovies =await fetchData();
            favMovies = favMovies || [];
            dispatch(moviesActions.setFavorite(favMovies));

		} catch (error) {
			alert(error);
		}
	};
};

export const sendMovies = (movies:string[],email:string)=>{
    return async (dispatch:any)=>{
        const sendRequest = async () => {
            const response = await fetch(`https://all-in-one-react-app-default-rtdb.firebaseio.com/${emailConverter(
                email
            )}/fav.json`,{method:'PUT',body:JSON.stringify(movies)});
            if(!response.ok){
                throw new Error("Something went wrong while sending movies data");
            }
        };

        try{ 
            await sendRequest();
        }catch(error){
            alert(error);
        }
    }
}
// export const moviesFetcher =  () => {
// 	return async (dispatch:any)=>{
// 		dispatch(uiActions.showLoading);
// 		const response = await fetch("https://swapi.dev/api/films/");
// 		if (!response.ok) {
// 			throw new Error("movies error");
// 			return [];
// 		}
// 		const data = await response.json();
// 		console.log(data);
// 		dispatch(uiActions.stopLoading);
// 		return data.results;
// 	}
	
// };
