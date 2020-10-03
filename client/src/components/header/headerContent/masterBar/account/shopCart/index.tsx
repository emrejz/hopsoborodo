import React from "react";
import { Block, Text } from "styledComps";
import * as Icon from "components/icons";

import "./index.scss";

interface IProps {}
const ShopCart: React.FC<IProps> = () => {
  return (
    <Block className="shopCartContainer">
      <Icon.ShopCart fill="var(--white)" width="20" height="20" />
      <Text className="shopCount">0</Text>
      <Text clr="--white" wei="--w700" size="1.5rem">
        Sepetim
      </Text>
    </Block>
  );
};

export default ShopCart;
