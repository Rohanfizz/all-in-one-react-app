import { CloudDownloadTwoTone, Search } from "@material-ui/icons";
import Card from "../Ui/Card";
import classes from "./SearchBar.module.css";

const SearchBar: React.FC = (props) => {
	return (
		<Card className={classes.container}>
			<input type="text" />
			<button>
				<Search style={{transform: 'scale(1.7)'}}/>
			</button>
            <button>
                <CloudDownloadTwoTone style={{transform: 'scale(1.7)'}}/>
            </button>
		</Card>
	);
};

export default SearchBar;