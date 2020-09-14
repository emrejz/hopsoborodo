import React from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";
import { quickMenuItems } from "constants/index";

import "./index.scss";

const Index = () => {
  return (
    <Block as="nav" hei="56px" bc="--quickMenu" jc="center">
      <Block wid="1200px">
        {quickMenuItems.map((item, index) => (
          <Block key={index} className="quickMenuItem">
            <Block wid="1px" hei="24px" bc="--quickMenuDividerBc" />
            <Text>{item}</Text>
          </Block>
        ))}
      </Block>
    </Block>
  );
};

export default Index;
