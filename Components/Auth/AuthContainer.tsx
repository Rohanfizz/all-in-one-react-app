import Link from "next/link";
import ChangePassword from "../../Components/Auth/ChangePasswordBtn";
import LoginBtn from "../../Components/Auth/LoginBtn";
import LogoutBtn from "../../Components/Auth/LogoutBtn";
import SignupButton from "../../Components/Auth/SignupBtn";
import Card from "../../Components/Ui/Card";
import classes from "./AuthContainer.module.css";
import { useSelector, RootStateOrAny } from "react-redux";

const AuthContainer: React.FC = (props) => {
	const isLoggedIn = useSelector(
		(state: RootStateOrAny) => state.auth.isLoggedIn
	);
	return (
		<Card className={classes.container}>
			<h1>Authorization</h1>
			{!isLoggedIn && <LoginBtn />}
			{!isLoggedIn && <SignupButton />}
			{isLoggedIn && <LogoutBtn />}
			{isLoggedIn && <ChangePassword />}
		</Card>
	);
};
export default AuthContainer;
