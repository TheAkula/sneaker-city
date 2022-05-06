import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
