import Card from "../Ui/Card";
import RotateLeftOutlinedIcon from "@material-ui/icons/RotateLeftOutlined";
import classes from "./IncDecWhole.module.css";

const IncDecWhole: React.FC = (props) => {
	return (
		<Card className={classes.container}>
			<h1>0</h1>
			<div className={classes.actions}>
				<button>-</button>
				<button>+</button>
				<button>+5</button>
				<button>
					<RotateLeftOutlinedIcon style={{transform: 'scale(3)'}}/>
				</button>
			</div>
            <h2>Redux Updations</h2>
		</Card>
	);
};
export default IncDecWhole;
