import React from "react";
import { Block, Text } from "styledComps";
import CarouselPanel from "./carousel";

import "./index.scss";

interface IProps {}
const Home: React.FC<IProps> = () => {
  return (
    <Block className="adminContainer">
      <CarouselPanel />
    </Block>
  );
};

export default Home;
