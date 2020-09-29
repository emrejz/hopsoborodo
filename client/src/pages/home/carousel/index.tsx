import React, { useEffect, useState } from "react";
import Block from "styledComps/block";
import Header from "./header";
import Content from "./content";
import { useQuery } from "@apollo/client";
import { getCarousel } from "graphqlResolvers";
import { ICarouselQuery } from "interfaces";

import "./index.scss";

export const Index = () => {
  const { data, loading, error } = useQuery<ICarouselQuery>(getCarousel);
  console.log("Index -> data", data);
  const [headerList, setHeaderList] = useState<Array<string>>([]);
  const [activeTab, setActiveTab] = useState(headerList[0]);

  useEffect(() => {
    const tempArr: Array<string> = [];
    if (data) {
      const { getCarousel } = data;
      if (getCarousel) {
        getCarousel.forEach((element) => {
          const { list, mainTitle } = element;
          if (list.length > 0) tempArr.push(mainTitle);
        });
      }
      setHeaderList([...tempArr]);
      setActiveTab(tempArr[0]);
    }
  }, [data]);
  return (
    <Block col className="carouselContainer">
      <img
        className="backdropImg"
        src="https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2118_20200825012817.png"
        alt="a"
      />
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        headerList={headerList}
      />
      {data?.getCarousel && <Content data={data.getCarousel[0].list[0]} />}
    </Block>
  );
};

export default Index;
