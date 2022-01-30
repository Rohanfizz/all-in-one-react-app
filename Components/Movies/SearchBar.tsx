import { CloudDownloadTwoTone, Search } from "@material-ui/icons";
import useAuthForm from "../../hooks/use-auth-form";
import Card from "../Ui/Card";
import classes from "./SearchBar.module.css";

const SearchBar: React.FC<{
	moviesFetcher: (e: React.MouseEvent) => any;
	updateResults: (val: string) => void;
}> = (props) => {
	const { value, onChangeHandler, reset } = useAuthForm((s: string) => true);

	const onClickHandler = (e: React.MouseEvent) => {
		props.updateResults(value);
		reset();
	};

	return (
		<Card className={classes.container}>
			<input type="text" value={value} onChange={onChangeHandler} />
			<button>
				<Search
					style={{ transform: "scale(1.7)" }}
					onClick={onClickHandler}
				/>
			</button>
			<button onClick={props.moviesFetcher}>
				<CloudDownloadTwoTone style={{ transform: "scale(1.7)" }} />
			</button>
		</Card>
	);
};

export default SearchBar;
