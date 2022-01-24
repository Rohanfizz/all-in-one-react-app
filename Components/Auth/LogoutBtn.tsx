import Link from "next/link";
import Card from "../Ui/Card";
import classes from "./commons.module.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const LogoutBtn: React.FC = (props) => {
	return (
		<Card className={classes.container}>
			<LockOutlinedIcon style={{transform : 'scale(2)'}}/>
			<h1>Logout</h1>
		</Card>
	);
};
export default LogoutBtn;
