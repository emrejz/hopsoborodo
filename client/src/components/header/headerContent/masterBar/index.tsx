import React from "react";
import Block from "styledComps/block";
import Brand from "./brand";
import Search from "./search";
import Account from "./account";

import "./index.scss";
interface IProps {}

const MasterBar: React.FC<IProps> = () => {
  return (
    <Block as="nav" flex="1" jc="center" pt="16px">
      <Block wid="1200px" ai="flex-start" jc="space-between">
        <Brand />
        <Search />
        <Account />
      </Block>
    </Block>
  );
};

export default MasterBar;
