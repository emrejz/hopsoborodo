import React from "react";
import Block from "styledComps/block";
import Brand from "./brand";
import Search from "./search";

import "./index.scss";
interface IProps {}

const MasterBar: React.FC<IProps> = () => {
  return (
    <Block flex="1" jc="center" pt="16px">
      <Block wid="1200px" ai="center" jc="space-between">
        <Brand />
        <Search />
      </Block>
    </Block>
  );
};

export default MasterBar;
