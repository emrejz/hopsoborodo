import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Block from "styledComps/block";
import Text from "styledComps/text";
import * as Icon from "components/icons";

import "./index.scss";

interface IProps {}
const ShopCart: React.FC<IProps> = () => {
  return (
    <Block className="shopCartContainer">
      <Icon.ShopCart fill="var(--white)" width="20" height="20" />
      <Text className="shopCount">0</Text>
      <Text clr="--white" wei="--w700" size="--shopCartText">
        Sepetim
      </Text>
    </Block>
  );
};

export default ShopCart;
