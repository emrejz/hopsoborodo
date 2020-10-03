import React from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";
import { quickMenuItems } from "constants/index";

import "./index.scss";

const Index = () => {
  return (
    <Block as="nav" className="quickMenuContainer">
      <Block>
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
