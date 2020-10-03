import React from "react";
import { Block } from "styledComps";
import Brand from "./brand";
import Search from "./search";
import Account from "./account";

import "./index.scss";
interface IProps {}

const MasterBar: React.FC<IProps> = () => {
  return (
    <Block as="nav" className="masterBarContainer">
      <Block ai="flex-start" jc="space-between">
        <Brand />
        <Search />
        <Account />
      </Block>
    </Block>
  );
};

export default MasterBar;
