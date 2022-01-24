import classes from "./Card.module.css";

const Card: React.FC<{ className?: string }> = (props) => {
	const allClasses = `${classes.card} ${props.className}`;
	return <div className={allClasses}>{props.children}</div>;
};
export default Card;
