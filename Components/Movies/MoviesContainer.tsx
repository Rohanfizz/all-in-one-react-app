import Card from "../Ui/Card";
import classes from "./MoviesContainer.module.css";
import ReactLoading from 'react-loading';
import MovieItem from "./MovieItem";
import {RootStateOrAny, useSelector} from 'react-redux';

const MoviesContainer: React.FC<{ items: any[] }> = (props) => {
	const isLoading = useSelector((state:RootStateOrAny)=>state.ui.isLoading);
	return (
		<Card className={classes.container}>
			{isLoading && <ReactLoading type={'cylon'} color={'white'} width="5%" />}
            {props.items.length === 0 && !isLoading &&  <h1>No Movies Found!</h1>}
			{props.items.length !== 0 && props.items.map((item) => {
				return <MovieItem key={item.episode_id} content={item} />;
			})}
		</Card>
	);
};
export default MoviesContainer;

