import React from "react";
import Block from "styledComps/block";
import TopLinks from "./topLinks";

import "./index.scss";
interface IProps {}
const HeaderContent: React.FC<IProps> = () => {
  return (
    <Block
      hei="118px"
      ai="flex-start"
      bc="--primary"
      className="headerContentContainer"
    >
      <TopLinks />
    </Block>
  );
};

export default HeaderContent;
