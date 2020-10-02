import React from "react";
import Block from "styledComps/block";
import ContentMobileItem from "./contentMobileItem";
import { ICarouselListElement } from "interfaces";

import "./index.scss";

interface IProps {
  selectedList: Array<ICarouselListElement>;
}
const Index: React.FC<IProps> = ({ selectedList }) => {
  return (
    <Block className="contentMobileContainer">
      {selectedList.map((item, index) => (
        <ContentMobileItem data={item} key={index} />
      ))}
    </Block>
  );
};

export default React.memo(Index);
