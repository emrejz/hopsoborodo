import React from "react";
import { useHistory } from "react-router-dom";
import Block from "styledComps/block";
import Text from "styledComps/text";
import * as Icon from "components/icons";

import "./index.scss";

interface IProps {}
const Sign: React.FC<IProps> = () => {
  let history = useHistory();
  const _onClick = () => {
    history.push("/sign");
  };
  return (
    <Block className="signContainer" onClick={_onClick}>
      <Icon.User fill="var(--searchBorderNoActive)" width="20" height="20" />
      <Block col>
        <Text size="1.5rem" clr="--deliveryMenuTittle" wei="--w700">
          Giriş Yap
        </Text>
        <Text size="1rem" clr="--deliveryMenuTittle">
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
