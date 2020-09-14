import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Block from "styledComps/block";
import Text from "styledComps/text";
import * as Icon from "components/icons";

import "./index.scss";

interface IProps {}
const Sign: React.FC<IProps> = () => {
  return (
    <Block className="signContainer">
      <Icon.User fill="var(--searchBorderNoActive)" width="20" height="20" />
      <Block col>
        <Text size="--accountTitleL" clr="--deliveryMenuTittle" wei="--w700">
          Giriş Yap
        </Text>
        <Text size="--accountTitleS" clr="--deliveryMenuTittle">
          veya üye ol
        </Text>
      </Block>
      <Icon.DownArrow
        fill="var(--searchBorderNoActive)"
        width="20"
        height="14"
      />
    </Block>
  );
};

export default Sign;
