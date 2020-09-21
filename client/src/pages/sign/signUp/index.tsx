import React, { useState } from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";
import SignInput from "../signInput";
import { ESignButtonType } from "interfaces/index";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  return (
    <Block col ai="center" bc="--primary">
      <SignInput
        kind={ESignButtonType.username}
        val={username}
        setVal={setUsername}
      />
      <SignInput
        kind={ESignButtonType.password}
        val={password}
        setVal={setPassword}
      />
      <SignInput
        kind={ESignButtonType.cPassword}
        val={cPassword}
        setVal={setCPassword}
        samePassword={cPassword === password}
      />
    </Block>
  );
};

export default Index;
