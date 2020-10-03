import React from "react";
import Block from "styledComps/block";
import TopLinks from "./topLinks";
import MasterBar from "./masterBar";

interface IProps {}
const HeaderContent: React.FC<IProps> = () => {
  return (
    <Block as="header" col bc="--primary" pt="14px" pb="16px">
      <TopLinks />
      <MasterBar />
    </Block>
  );
};

export default HeaderContent;
