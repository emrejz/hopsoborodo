import React from "react";
import Block from "styledComps/block";
import CustomLink from "./customLink";
import { topLinks } from "constants/index";

import "./index.scss";
interface IProps {}

const TopLinks: React.FC<IProps> = () => {
  return (
    <Block flex="1" jc="center" mt="14px" className="topLinksContainer">
      {topLinks.map((item, index) => (
        <CustomLink key={index} item={item} />
      ))}
    </Block>
  );
};

export default TopLinks;
