import React, { useState, useEffect } from "react";
import { Block, Text } from "styledComps";
import * as Icon from "components/icons";
import { ESignButtonType, ESignInputCase } from "interfaces/index";

import "./index.scss";
interface IProps {
  kind: ESignButtonType;
  val: string;
  setVal: React.Dispatch<React.SetStateAction<string>>;
  samePassword?: boolean;
}
const Index: React.FC<IProps> = ({
  kind,
  val,
  setVal,
  samePassword = true,
}) => {
  const [isHide, setIsHide] = useState(true);
  const [placeHolderText, setPlaceHolderText] = useState("");
  const [inputCase, setInputCase] = useState<ESignInputCase>(
    ESignInputCase.start
  );

  const _onClick = () => setIsHide((prev) => !prev);

  useEffect(() => {
    switch (kind) {
      case ESignButtonType.username:
        setPlaceHolderText("Enter username");
        break;
      case ESignButtonType.password:
        setPlaceHolderText("Enter password");
        break;
      case ESignButtonType.cPassword:
        setPlaceHolderText("Re-enter password");
        break;
    }
  }, [kind]);
  useEffect(() => {
    if (val.length !== 0) {
      if (val.length < 3) {
        setInputCase(ESignInputCase.error);
      } else if (!samePassword) {
        setInputCase(ESignInputCase.error);
      } else {
        setInputCase(ESignInputCase.success);
      }
    }
  }, [val, samePassword]);
  return (
    <Block
      className={`signInputContainer ${
        inputCase === ESignInputCase.error
          ? "errField"
          : inputCase === ESignInputCase.success
          ? "sucField"
          : ""
      }`}
    >
      <input
        type={
          kind !== ESignButtonType.username
            ? isHide
              ? "password"
              : "type"
            : "type"
        }
        placeholder={placeHolderText}
        onChange={(e) => setVal(e.target.value.trim())}
        value={val}
      />
      {inputCase === ESignInputCase.error && <Icon.WarnInput />}

      {kind !== ESignButtonType.username ? (
        isHide ? (
          <Icon.ShowPassword onClick={_onClick} />
        ) : (
          <Icon.HidePassword onClick={_onClick} />
        )
      ) : null}
      {inputCase === ESignInputCase.error && (
        <Text mar="7px 0px 7px 8px" clr="--singInputErrorInfoClr" size="1.2rem">
          {!samePassword
            ? "Passwords arent same!"
            : "Field must be min 3 characters!"}
        </Text>
      )}
    </Block>
  );
};

export default Index;
