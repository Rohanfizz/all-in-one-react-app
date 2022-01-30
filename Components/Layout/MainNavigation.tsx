import Link from "next/link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import classes from "./MainNavigation.module.css";
import { RootStateOrAny, useSelector } from "react-redux";

const MainNavigation: React.FC = (props) => {
	const isLoggedIn = useSelector(
		(state: RootStateOrAny) => state.auth.isLoggedIn
	);

	return (
		<header className={classes.header}>
			<h1>
				<Link href="/">All-In-One</Link>
			</h1>
			<nav>
				<ul>
					{isLoggedIn && (
						<li>
							<Link href="/apps/movies">Movies</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<Link href="/apps/todo">Todo</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<Link href="/apps/incDec">IncDec</Link>
						</li>
					)}
					{isLoggedIn && (
						<li>
							<div className={classes.dropdownIcon}>
								<Link href="/auth">
									<AccountCircleIcon />
								</Link>
							</div>
						</li>
					)}
					{!isLoggedIn && <li>
						<button className={classes.loginBtn}><Link href="/auth">Login/Signup</Link></button></li>}
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
