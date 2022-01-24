import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/globals.css";
import Layout from "../Components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
