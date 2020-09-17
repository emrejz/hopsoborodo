import React, { useState } from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";
import * as Icon from "components/icons";
import { ESignInputCase } from "interfaces/index";

import "./index.scss";
interface IProps {
  forPassword?: boolean;
  placeHolderText: string;
}
const Index: React.FC<IProps> = ({ forPassword = false, placeHolderText }) => {
  const [isHide, setIsHide] = useState(true);
  const [inputCase, setInputCase] = useState<ESignInputCase>(
    ESignInputCase.start
  );
  const [val, setVal] = useState("");
  const _onClick = () => setIsHide((prev) => !prev);
  const inpFunc = (e: React.FocusEvent<HTMLInputElement>) => {
    if (val.length < 3) {
      setInputCase(ESignInputCase.error);
    } else {
      setInputCase(ESignInputCase.success);
    }
  };

  return (
    <Block
      className={`signInputContainer ${
        inputCase == ESignInputCase.error
          ? "errField"
          : inputCase == ESignInputCase.success
          ? "sucField"
          : ""
      }`}
    >
      <input
        type={forPassword ? (isHide ? "password" : "type") : "type"}
        placeholder={placeHolderText}
        onChange={(e) => setVal(e.target.value.trim())}
        value={val}
        onBlur={inpFunc}
      />
      {inputCase == ESignInputCase.error && <Icon.WarnInput />}

      {forPassword == true ? (
        isHide ? (
          <Icon.ShowPassword onClick={_onClick} />
        ) : (
          <Icon.HidePassword onClick={_onClick} />
        )
      ) : null}
      {inputCase == ESignInputCase.error && (
        <Text mar="7px 0px 7px 8px" clr="--singInputErrorInfoClr" size="1.2rem">
          Field must be min 3 characters!
        </Text>
      )}
    </Block>
  );
};

export default Index;
