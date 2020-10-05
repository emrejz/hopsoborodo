import React, { useEffect, useRef, useContext } from "react";
import { CarouselContext } from "stores/carousel";
import ContentDesktopItem from "components/carousel/contentDesktopItem";
import { ICarouselContext, ICarouselListElement } from "interfaces";

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
  return <>{activeItem && <ContentDesktopItem activeItem={activeItem} />}</>;
};

export default Index;
