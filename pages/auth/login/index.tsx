import CredentialContainer from "../../../Components/Auth/CredentialContainer";
import CredentialsInputForm from "../../../Components/Auth/CredentialsInputForm";

const LoginPage: React.FC = (props) => {
	return (
		<CredentialContainer mode="Login">
			<CredentialsInputForm query="login" />
		</CredentialContainer>
	);
};
export default LoginPage;
