import Card from "../Ui/Card";
import classes from "./commons.module.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";
import {useRouter} from 'next/router';
import { authActions } from "../../store/auth-slice";

const LogoutBtn: React.FC = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const onLogoutHandler = (e: React.MouseEvent) => {
		dispatch(authActions.logout());
		router.replace('/');
	};

	return (
		<Card className={classes.container}>
			<div onClick={onLogoutHandler} className={classes.logoutContainer}>
				<LockOutlinedIcon style={{ transform: "scale(2)" }} />
				<h1 style={{cursor:'pointer'}}>Logout</h1>
			</div>
		</Card>
	);
};
export default LogoutBtn;
