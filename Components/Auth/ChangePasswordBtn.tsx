import Link from "next/link";
import Card from "../Ui/Card";
import classes from "./commons.module.css";
import PasswordIcon from '@mui/icons-material/Password';

const ChangePassword: React.FC = (props) => {
	return (
		<Card className={classes.container}>
			<PasswordIcon style={{transform : 'scale(2)'}}/>
			<h1><Link href="/auth/changePass">Change Password</Link></h1>
		</Card>
	);
};
export default ChangePassword;
