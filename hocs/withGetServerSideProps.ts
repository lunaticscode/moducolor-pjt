import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import { MCErrorType } from "../types/error";

const DEBUG_MODE = true;
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
      DEBUG_MODE && console.log(err);
      let errObj: MCErrorType = {
        name: "(!)getServerSideProps Error",
        message: "",
      };
      if (axios.isAxiosError(err)) {
        const { status, statusText: message = "message" } = err.response || {};
        DEBUG_MODE &&
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
        DEBUG_MODE && console.log("this is not axios error");
        const message =
          typeof err === "object" && err instanceof Error
            ? err.message
            : String(err);
        errObj = {
          name: "(!)getServerSideProps Error",
          message,
        };
        DEBUG_MODE && console.log(errObj);
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
