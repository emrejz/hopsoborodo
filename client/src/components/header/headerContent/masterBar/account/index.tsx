import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Block from "styledComps/block";
import ShopCart from "./shopCart";
import Sign from "./sign";

import "./index.scss";

interface IProps {}
const Account: React.FC<IProps> = () => {
  return (
    <Block wid="309px" hei="48px" jc="space-between">
      <Sign />
      <ShopCart />
    </Block>
  );
};

export default Account;
