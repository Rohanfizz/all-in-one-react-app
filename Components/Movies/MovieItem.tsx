import classes from "./MovieItem.module.css";
import MovieObj from "../../models/Movie";
import Card from "../Ui/Card";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const MovieItem: React.FC<{ content: MovieObj }> = (props) => {
	return (
		<Card className={classes.container}>
			<div className={classes.movieContent}>
				<h1>{props.content.title}</h1>
				<section className={classes.description}><p>{props.content.description}</p></section>
			</div>
			<div>
				<button className={props.content.isFav?classes.selected:''}>
					<FavoriteBorderOutlinedIcon />
				</button>
			</div>
		</Card>
	);
};
export default MovieItem;
