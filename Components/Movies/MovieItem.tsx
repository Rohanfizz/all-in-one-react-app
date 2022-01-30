import classes from "./MovieItem.module.css";
import Card from "../Ui/Card";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { moviesActions } from "../../store/movies-slice";

const MovieItem: React.FC<{ content: any }> = (props) => {
	const dispatch = useDispatch();
	const favArray = useSelector((state: RootStateOrAny) => state.movies.fav);

	const toggleFav = (event: React.MouseEvent) => {
		const isFav = favArray.includes(props.content.episode_id);
		if (isFav)
			dispatch(moviesActions.removeFavorite(props.content.episode_id));
		else dispatch(moviesActions.addFavorite(props.content.episode_id));
	};

	const favClasses = favArray.includes(props.content.episode_id)
		? classes.selected
		: "";

	return (
		<Card className={classes.container}>
			<div className={classes.movieContent}>
				<h1>{props.content.title}</h1>
				<section className={classes.description}>
					<p>{props.content.opening_crawl}</p>
				</section>
			</div>
			<div>
				<button className={favClasses} onClick={toggleFav}>
					<FavoriteBorderOutlinedIcon />
				</button>
			</div>
		</Card>
	);
};
export default MovieItem;
