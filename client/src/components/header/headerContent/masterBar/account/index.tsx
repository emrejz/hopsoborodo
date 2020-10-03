import React from "react";
import { Block } from "styledComps";
import ShopCart from "./shopCart";
import Sign from "./sign";

import "./index.scss";

interface IProps {}
const Account: React.FC<IProps> = () => {
  return (
    <Block className="headerAccContainer">
      <Sign />
      <ShopCart />
    </Block>
  );
};

export default Account;
