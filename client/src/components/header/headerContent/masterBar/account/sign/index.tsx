import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Block from "styledComps/block";
import Text from "styledComps/text";
import * as Icon from "components/icons";
import { SessionContext } from "stores/session";

import "./index.scss";

interface IProps {}
const Sign: React.FC<IProps> = () => {
  const {
    state: { session },
  } = useContext(SessionContext);
  let history = useHistory();
  const _onClick = () => {
    history.push("/sign");
  };
  return (
    <Block className="signContainer" onClick={_onClick}>
      <Icon.User fill="var(--searchBorderNoActive)" width="20" height="20" />
      <Block col>
        <Text size="1.5rem" clr="--deliveryMenuTittle" wei="--w700">
          {session?.username ? "Hesabım" : "Giriş Yap"}
        </Text>
        <Text size="1rem" clr="--deliveryMenuTittle">
          {session?.username ? session.username : "veya üye ol"}
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
