import { useState } from "react";
import classes from "./AllFavbtn.module.css";

const AllFavBtn: React.FC<{ favSelected: (isFav: boolean) => void }> = (props) => {
	const [allActive, setAllActive] = useState(true);
	const [favActive, setFavActive] = useState(false);

	const setAllHandler = (e: React.MouseEvent) => {
		setAllActive(true);
		setFavActive(false);
		props.favSelected(false);
	};

	const setFavHandler = (e: React.MouseEvent) => {
		setAllActive(false);
		setFavActive(true);
		props.favSelected(true);
	};

	return (
		<section className={classes.container}>
			<button
				onClick={setAllHandler}
				className={`${allActive ? classes.selected : ""}`}
			>
				All
			</button>
			<button
				onClick={setFavHandler}
				className={`${favActive ? classes.selected : ""}`}
			>
				Favorites
			</button>
		</section>
	);
};

export default AllFavBtn;
