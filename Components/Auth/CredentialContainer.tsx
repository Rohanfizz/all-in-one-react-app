import Card from "../Ui/Card";
import classes from "./CredentialContainer.module.css";

const CredentialContainer: React.FC<{ className?: string,mode:string }> = (props) => {
	const allClasses = `${props.className} ${classes.container}`;
	return <Card className={allClasses}>
		<h1>{props.mode}</h1>
		{props.children}
	</Card>;
};
export default CredentialContainer;
