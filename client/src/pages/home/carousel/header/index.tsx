import React, { useContext } from "react";
import { Block } from "styledComps";
import { CarouselContext } from "stores/carousel";
import HeaderItem from "./headerItem";

import "./index.scss";

interface IProps {}
const Index: React.FC<IProps> = () => {
  const {
    state: { tabList },
  } = useContext(CarouselContext);
  return (
    <Block className="carouselHeaderContainer">
      {tabList.map((item, index) => (
        <HeaderItem key={index} mainTitle={item} />
      ))}
    </Block>
  );
};

export default Index;
