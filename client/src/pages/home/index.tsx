import React, { useContext } from "react";
import Layout from "components/layout";
import Carousel from "./carousel";
import { SessionContext } from "stores/session";

import "./index.scss";

interface IProps {}
const Home: React.FC<IProps> = () => {
  const { state } = useContext(SessionContext);
  console.log(state);
  return (
    <Layout>
      <Carousel />
    </Layout>
  );
};

export default Home;
