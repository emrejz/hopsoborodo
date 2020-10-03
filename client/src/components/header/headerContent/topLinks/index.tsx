import React from "react";
import { Block } from "styledComps";
import CustomLink from "./customLink";
import { topLinks } from "constants/index";

import "./index.scss";

interface IProps {}

const TopLinks: React.FC<IProps> = () => {
  return (
    <Block as="nav" jc="center" className="topLinksContainer">
      {topLinks.map((item, index) => (
        <CustomLink key={index} item={item} />
      ))}
    </Block>
  );
};

export default TopLinks;
