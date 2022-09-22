import type { NextPage } from "next";
import withGetServerSideProps from "../hocs/withGetServerSideProps";

const Home: NextPage = () => {
  return <div></div>;
};

export const getServerSideProps = withGetServerSideProps(async (context) => {
  return {
    props: {},
  };
});
export default Home;
