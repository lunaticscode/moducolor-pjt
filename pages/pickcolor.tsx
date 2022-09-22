import type { GetServerSideProps, NextPage } from "next";
import withGetServerSideProps from "../hocs/withGetServerSideProps";
import { MCBasePageProps } from "../types/common";

interface PickColorPageProps extends MCBasePageProps {}
const PickColorPage: NextPage<PickColorPageProps> = ({ ...props }) => {
  return <div>pickcolor-page</div>;
};
PickColorPage.defaultProps = {
  pageTitle: "PickColor",
};

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async (context) => {
    console.log({ statusCode: context.req.statusCode });
    return {
      props: {
        test: "test-ss-prop",
      },
    };
  }
);

export default PickColorPage;
