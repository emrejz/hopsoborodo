import React, { useContext } from "react";
import Block from "styledComps/block";
import { CarouselContext } from "../store";
import HeaderItem from "./headerItem";

interface IProps {}
const Index: React.FC<IProps> = () => {
  const {
    state: { tabList },
  } = useContext(CarouselContext);
  return (
    <Block flex="1" jc="center" pt="18px" pb="13px">
      {tabList.map((item, index) => (
        <HeaderItem key={index} mainTitle={item} />
      ))}
    </Block>
  );
};

export default Index;
