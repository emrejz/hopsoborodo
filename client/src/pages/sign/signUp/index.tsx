import React, { useState } from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";
import SignInput from "../signInput";

const Index = () => {
  return (
    <Block col ai="center" bc="--primary">
      <SignInput placeHolderText={"Username"} />
      <SignInput forPassword={true} placeHolderText={"Password"} />
      <SignInput forPassword={true} placeHolderText={"Password"} />
    </Block>
  );
};

export default Index;
