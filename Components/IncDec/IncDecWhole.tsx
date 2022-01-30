import Card from "../Ui/Card";
import RotateLeftOutlinedIcon from "@material-ui/icons/RotateLeftOutlined";
import classes from "./IncDecWhole.module.css";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { reduxUpdationActions } from "./../../store/redux-updations";

const IncDecWhole: React.FC = (props) => {
	const dispatch = useDispatch();
	const targetNumber = useSelector(
		(state: RootStateOrAny) => state.reduxUpdation.targetNumber
	);

	const onIncrementHandler = () => {
		dispatch(reduxUpdationActions.incrementNumber());
	};
	const onDecrementHandler = () => {
		dispatch(reduxUpdationActions.decrementNumber());
	};
	const onPlusHandler = () => {
		dispatch(reduxUpdationActions.incrementByX(5));
	};
	const onResetHandler = () => {
		dispatch(reduxUpdationActions.resetNumber());
	};

	return (
		<Card className={classes.container}>
			<h1>{targetNumber}</h1>
			<div className={classes.actions}>
				<button onClick={onDecrementHandler}>-</button>
				<button onClick={onIncrementHandler}>+</button>
				<button onClick={onPlusHandler}>+5</button>
				<button onClick={onResetHandler}>
					<RotateLeftOutlinedIcon style={{ transform: "scale(3)" }} />
				</button>
			</div>
			<h2>Redux Updations</h2>
		</Card>
	);
};
export default IncDecWhole;
