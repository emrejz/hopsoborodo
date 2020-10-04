import React, { useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Block, Text } from "styledComps";
import { CarouselContext } from "stores/carousel";
import { ICarouselContext, ICarouselListElement } from "interfaces";

import "./index.scss";

interface IProps {}
const Index: React.FC<IProps> = () => {
  const counter = useRef(0);
  const refSelectedList = useRef<Array<any>>([]);
  const {
    state: { activeItem, selectedList },
    dispatch,
  } = useContext<ICarouselContext>(CarouselContext);
  useEffect(() => {
    let item: ICarouselListElement;

    if (refSelectedList.current !== selectedList) {
      refSelectedList.current = selectedList;
      counter.current = 0;
      item = selectedList[counter.current];
      dispatch.setActiveItem(item);
    }

    if (activeItem) counter.current = selectedList.indexOf(activeItem);

    const interval = setInterval(() => {
      counter.current = counter.current + 1;
      const leng = selectedList.length;
      if (counter.current === leng) {
        counter.current = 0;
      }
      item = selectedList[counter.current];
      dispatch.setActiveItem(item);
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedList, activeItem]);
  return (
    <>
      {activeItem?.title && (
        <Block className="carouselContentContainer">
          <Block col className="info">
            <Text className="title">{activeItem.title}</Text>
            <Text className="desc">{activeItem.desc}</Text>
            <Block
              as={Link}
              to={activeItem.path}
              style={{
                backgroundColor: activeItem.mobileBC,
              }}
            >
              <Text>{activeItem.buttonText}</Text>
            </Block>
          </Block>
          <Block as={Link} to={activeItem.path}>
            <img src={activeItem.img} alt={activeItem.title} />
          </Block>
        </Block>
      )}
    </>
  );
};

export default Index;
