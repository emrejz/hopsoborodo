import React from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";
import { ICarousel } from "interfaces";
import * as Icon from "components/icons";

import "./index.scss";

interface IProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  data: Array<ICarousel>;
  headerList: Array<string>;
}
const Index: React.FC<IProps> = ({
  data,
  activeTab,
  headerList,
  setActiveTab,
}) => {
  const arrowTitle = (isLeft: boolean) => {
    const index = headerList.indexOf(activeTab);
    const length = headerList.length - 1;

    if (isLeft) {
      if (index !== 0) return headerList[index - 1];
      else return headerList[length];
    } else {
      if (index !== length) return headerList[index + 1];
      else return headerList[0];
    }
  };
  const _onClick = (isLeft: boolean) => {
    const index = headerList.indexOf(activeTab);
    const length = headerList.length - 1;
    if (isLeft) {
      if (index !== 0) return setActiveTab(headerList[index - 1]);
      else return setActiveTab(headerList[length]);
    } else {
      if (index !== length) return setActiveTab(headerList[index + 1]);
      else return setActiveTab(headerList[0]);
    }
  };
  return (
    <Block className="carouselSlickContainer">
      <Block
        as="button"
        onClick={() => _onClick(true)}
        className="arrowItem leftArrowItem"
      >
        <Icon.Arrow />
        <Text size="1.4rem" wei="--w600" clr="--carouselHeaderItemClr">
          {arrowTitle(true)}
        </Text>
      </Block>
      {data.map((item) => {
        if (item.mainTitle === activeTab) {
          return item.list.map((item, index) => (
            <Block as="button" key={index} className="item">
              <img src={item.iconImg} alt="icon" />
            </Block>
          ));
        }
      })}
      <Block
        as="button"
        className="arrowItem rightArrowItem"
        onClick={() => _onClick(false)}
      >
        <Text size="1.4rem" wei="--w600" clr="--carouselHeaderItemClr">
          {arrowTitle(false)}
        </Text>

        <Icon.Arrow />
      </Block>
    </Block>
  );
};

export default Index;
