import React from "react";
import { Block, Text } from "styledComps";
import * as Icon from "components/icons";

import "./index.scss";

interface IProps {
  error: string;
  setError: (value: React.SetStateAction<string>) => void;
}
const Index: React.FC<IProps> = ({ error, setError }) => {
  const _onClick = () => setError("");
  return (
    <Block className="signErrorContainer">
      <Block wid="8px" bc="--signErrorBoxLeftBC" />
      <Block
        col
        flex="1"
        ai="space-between"
        pad="16px 12px 16px 16px"
        clr="--signButtonsText"
      >
        <Block ai="center">
          <Icon.WarnInput />
          <Block flex="1" mar="0px 8px 0px 16px">
            <Text size="1.6rem" wei="--w600">
              Hata
            </Text>
          </Block>
          <Icon.Close className="closeIcon" onClick={_onClick} />
        </Block>
        <Text size="1.4rem" mar="12px 12px 0px 40px">
          {error}
        </Text>
      </Block>
    </Block>
  );
};

export default Index;
