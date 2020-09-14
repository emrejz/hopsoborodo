import React from "react";
import Block from "styledComps/block";
import CustomLink from "./customLink";
import { topLinks } from "constants/index";

interface IProps {}

const TopLinks: React.FC<IProps> = () => {
  return (
    <Block as="nav" jc="center" mt="14px">
      {topLinks.map((item, index) => (
        <CustomLink key={index} item={item} />
      ))}
    </Block>
  );
};

export default TopLinks;
