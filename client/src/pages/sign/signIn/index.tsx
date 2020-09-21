import React, { useState } from "react";
import Block from "styledComps/block";
import SignInput from "../signInput";
import { ESignButtonType } from "interfaces/index";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    </Block>
  );
};

export default Index;
