import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import CustomHead from "../components/CustomHead";
import { MCBasePageProps } from "../types/common";

function MyApp({ Component, pageProps }: AppProps<Partial<MCBasePageProps>>) {
  const { pageTitle } = pageProps;
  return (
    <>
      <CustomHead pageTitle={pageTitle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
