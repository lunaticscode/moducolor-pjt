import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import { ServerSideErrorType } from "../types/error";

const mapPathToPageTitle: { [key: string]: string } = {
  pickcolor: "PickColor",
  default: "",
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
      let errObj: ServerSideErrorType = {};
      if (axios.isAxiosError(err)) {
        const { status: errStatus, statusText: errText } = err.response || {};
        console.log("\n\n(!)getServerSideProps 'Axios' Error ::: \n", {
          errStatus,
          errText,
        });
        errObj = {
          name: "(!)getServerSideProps 'Axios' Error",
          errStatus,
          errText,
        };
      } else {
        const errText =
          typeof err === "object" && err instanceof Error
            ? err.message
            : String(err);
        errObj = {
          name: "(!)getServerSideProps Error",
          errText,
        };
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
