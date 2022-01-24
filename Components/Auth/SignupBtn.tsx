import Link from "next/link";
import Card from "../Ui/Card";
import classes from "./commons.module.css";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const SignupButton : React.FC = (props) => {
	return (
		<Card className={classes.container}>
			<PersonAddAltIcon style={{transform : 'scale(2)'}}/>
			<h1><Link href="/auth/signUp">Sign-up</Link></h1>
		</Card>
	);
};
export default SignupButton;
