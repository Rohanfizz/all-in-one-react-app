import Link from "next/link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import classes from "./MainNavigation.module.css";
import { useState } from "react";
import Card from "../Ui/Card";

const MainNavigation: React.FC = (props) => {


	return (
		<header className={classes.header}>
			<h1>
				<Link href="/">All-In-One</Link>
			</h1>
			<nav>
				<ul>
					<li>
						<Link href="/apps/movies">Movies</Link>
					</li>
					<li>
						<Link href="/apps/todo">Todo</Link>
					</li>
					<li>
						<Link href="/apps/incDec">IncDec</Link>
					</li>
					<li>
						<div
							className={classes.dropdownIcon}
						>
							<Link href="/auth"><AccountCircleIcon /></Link>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
