import React, { useRef, useEffect, useContext } from "react";
import Block from "styledComps/block";
import Header from "./header";
import Content from "./content";
import Slick from "./slick";
import { useQuery } from "@apollo/client";
import { getCarousel } from "graphqlResolvers";
import { ICarouselQuery, ICarouselContext } from "interfaces";
import { CarouselContext } from "./store";
import StoreHOC from "./StoreHOC";

import "./index.scss";

export interface IProps {}
export const Index: React.FC<IProps> = () => {
  const { data, loading, error } = useQuery<ICarouselQuery>(getCarousel);
  const {
    state: { activeItem, activeTab, tabList },
    dispatch,
  } = useContext<ICarouselContext>(CarouselContext);

  const counter = useRef(0);
  useEffect(() => {
    dispatch.setLoading(loading);
    if (error) dispatch.setError(error.message);
    if (!error) dispatch.setError("");
    if (data?.getCarousel) {
      const tempArr: Array<string> = [];
      data.getCarousel.forEach((element) => {
        const { list, mainTitle } = element;
        if (list.length > 0) {
          tempArr.push(mainTitle);
        }
      });
      dispatch.setTabList(tempArr);
      dispatch.setActiveTab(tempArr[0]);
      dispatch.setActiveItem(data.getCarousel[0].list[0]);
      dispatch.setData(data.getCarousel);
    }
  }, [data, loading, error]);

  useEffect(() => {
    counter.current = 0;
    if (activeTab && data) {
      const index = tabList.indexOf(activeTab);
      dispatch.setActiveItem(data.getCarousel[index].list[0]);
      const interval = setInterval(() => {
        counter.current = counter.current + 1;
        if (counter.current === data.getCarousel[index].list.length) {
          counter.current = 0;
        }
        dispatch.setActiveItem(data.getCarousel[index].list[counter.current]);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  return (
    <Block
      col
      className={
        activeItem?.isDark
          ? "carouselContainer isDarkCarousel"
          : "carouselContainer"
      }
    >
      <img className="backdropImg" src={activeItem?.backImg} alt="backdrop" />
      <Header />
      {activeItem && <Content data={activeItem} />}
      <Slick counter={counter} />
    </Block>
  );
};

export default StoreHOC(Index);
