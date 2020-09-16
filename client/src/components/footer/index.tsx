import React from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";

const Index = () => {
  return (
    <Block
      as="footer"
      bc="--searchBorderNoActive"
      ai="center"
      jc="center"
      hei="500px"
    >
      <Text clr="--white" size="5rem">
        Footer
      </Text>
    </Block>
  );
};

export default Index;
