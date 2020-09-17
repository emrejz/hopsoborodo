import React from "react";
import Block from "styledComps/block";
import SignInput from "../signInput";

const Index = () => {
  return (
    <Block col ai="center" bc="--primary">
      <SignInput placeHolderText={"Username"} />
      <SignInput forPassword={true} placeHolderText={"Password"} />
    </Block>
  );
};

export default Index;
