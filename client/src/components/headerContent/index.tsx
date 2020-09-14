import React from "react";
import Block from "styledComps/block";
import TopLinks from "./topLinks";
import MasterBar from "./masterBar";

interface IProps {}
const HeaderContent: React.FC<IProps> = () => {
  return (
    <Block as="header" col hei="110px" bc="--primary">
      <TopLinks />
      <MasterBar />
    </Block>
  );
};

export default HeaderContent;
