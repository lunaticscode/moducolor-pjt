import type { NextPage } from "next";
import withGetServerSideProps from "../hocs/withGetServerSideProps";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <div className={styles.container}></div>;
};

export const getServerSideProps = withGetServerSideProps(async (context) => {
  return {
    props: {},
  };
});
export default Home;
