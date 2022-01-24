import Card from "../Ui/Card";
import classes from "./MoviesContainer.module.css";
import MovieObj from "../../models/Movie";
import MovieItem from "./MovieItem";

const MoviesContainer: React.FC<{ items: MovieObj[] }> = (props) => {
	console.log(props.items);
	return (
		<Card className={classes.container}>
            {props.items.length === 0 && <h1>No Movies found!</h1>}
			{props.items.length !== 0 && props.items.map((item) => {
				return <MovieItem content={item} />;
			})}
		</Card>
	);
};
export default MoviesContainer;

