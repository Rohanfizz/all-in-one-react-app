import CredentialContainer from "../../../Components/Auth/CredentialContainer";
import CredentialsInputForm from "../../../Components/Auth/CredentialsInputForm";

const SignUpPage: React.FC = (props) => {
	return (
		<CredentialContainer mode="Sign-Up">
			<CredentialsInputForm query="signup"/>
		</CredentialContainer>
	);
};
export default SignUpPage;
