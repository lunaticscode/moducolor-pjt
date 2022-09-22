import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import CustomHead from "../components/CustomHead";
import { MCBasePageProps } from "../types/common";
import { ErrorBoundary } from "react-error-boundary";
import CustomError from "../components/CustomError";

function MyApp({ Component, pageProps }: AppProps<Partial<MCBasePageProps>>) {
  const { pageTitle, isError, error } = pageProps;
  return (
    <>
      <CustomHead pageTitle={pageTitle} />
      <Layout isError={isError} error={error}>
        <ErrorBoundary FallbackComponent={CustomError}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    </>
  );
}

export default MyApp;
