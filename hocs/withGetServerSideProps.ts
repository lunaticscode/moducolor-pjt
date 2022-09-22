import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios, { AxiosError } from "axios";
import { MCErrorType } from "../types/error";
import { FallbackProps } from "react-error-boundary";

const mapPathToPageTitle: { [key: string]: string } = {
  pickcolor: "PickColor",
  default: "Home",
};

const withGetServerSideProps = (getServerSideProps: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      const path = context.resolvedUrl?.replace(/\//g, "").trim() || "default";
      return await getServerSideProps(context).then(
        (res: { [key: string]: any }) => {
          return {
            ...res,
            props: {
              ...res.props,
              isError: false,
              pageTitle: mapPathToPageTitle[path],
            },
          };
        }
      );
    } catch (err) {
      console.log(err);
      let errObj: MCErrorType = {
        name: "(!)getServerSideProps Error",
        message: "",
      };
      if (axios.isAxiosError(err)) {
        const { status, statusText: message = "message" } = err.response || {};
        console.log("\n\n(!)getServerSideProps 'Axios' Error ::: \n", {
          status,
          message,
        });
        errObj = {
          name: "(!)getServerSideProps 'Axios' Error",
          status,
          message,
        };
      } else {
        console.log("this is not axios error");
        const message =
          typeof err === "object" && err instanceof Error
            ? err.message
            : String(err);
        errObj = {
          name: "(!)getServerSideProps Error",
          message,
        };
        console.log(errObj);
      }
      return {
        props: {
          isError: true,
          error: errObj,
        },
      };
    }
  };
};
export default withGetServerSideProps;
