import ChangePasswordForm from "../../../Components/Auth/ChangePasswordForm";
import CredentialContainer from "../../../Components/Auth/CredentialContainer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ChangePasswordPage: React.FC = (props) => {
	const router = useRouter();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	
	useEffect(() => {
		if (!isLoggedIn) {
			router.replace("/auth/login");
		}
	}, []);

	return (
		<CredentialContainer mode="Change Password">
			<ChangePasswordForm />
		</CredentialContainer>
	);
};
export default ChangePasswordPage;
