import Link from "next/link";
import Card from "../Ui/Card";
import classes from "./commons.module.css";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";

const LoginBtn: React.FC = (props) => {
	return (
		<Card className={classes.container}>
			<LockOpenOutlinedIcon style={{transform : 'scale(2)'}}/>
			<h1><Link href="/auth/login">Login</Link></h1>
		</Card>
	);
};
export default LoginBtn;
