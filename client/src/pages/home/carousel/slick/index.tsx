import React, { useContext } from "react";
import { Block, Text } from "styledComps";
import { ICarouselListElement, ICarouselContext } from "interfaces";
import * as Icon from "components/icons";
import { CarouselContext } from "../store";

import "./index.scss";

interface IProps {}
const Index: React.FC<IProps> = () => {
  const {
    state: { data, activeTab, tabList, activeItem },
    dispatch,
  } = useContext<ICarouselContext>(CarouselContext);
  const arrowTitle = (isLeft: boolean) => {
    const index = tabList.indexOf(activeTab);
    const length = tabList.length - 1;

    if (isLeft) {
      if (index !== 0) return tabList[index - 1];
      else return tabList[length];
    } else {
      if (index !== length) return tabList[index + 1];
      else return tabList[0];
    }
  };
  const _onClick = (isLeft: boolean) => {
    const index = tabList.indexOf(activeTab);
    const length = tabList.length - 1;
    if (isLeft) {
      if (index !== 0) return dispatch.setActiveTab(tabList[index - 1]);
      else return dispatch.setActiveTab(tabList[length]);
    } else {
      if (index !== length) return dispatch.setActiveTab(tabList[index + 1]);
      else return dispatch.setActiveTab(tabList[0]);
    }
  };
  const selcetActiveItem = (item: ICarouselListElement) => {
    dispatch.setActiveItem(item);
  };
  console.log("SLİCK");
  return (
    <Block className="carouselSlickContainer">
      <Block wid="100%" jc="flex-end">
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
      </Block>
      {data &&
        data.map((item) => {
          if (item.mainTitle === activeTab) {
            return item.list.map((item, index) => (
              <Block
                as="button"
                key={index}
                className={
                  activeItem?.img === item.img ? "item active" : "item"
                }
                onClick={() => selcetActiveItem(item)}
              >
                <img src={item.iconImg ? item.iconImg : item.img} alt="icon" />
              </Block>
            ));
          }
        })}
      <Block wid="100%">
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
    </Block>
  );
};

export default React.memo(Index);
