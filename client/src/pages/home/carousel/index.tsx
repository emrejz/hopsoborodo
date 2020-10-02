import React, { useEffect, useContext } from "react";
import Block from "styledComps/block";
import Header from "./header";
import ContentDesktop from "./contentDesktop";
import ContentMobile from "./contentMobile";
import Slick from "./slick";
import CompStatus from "components/compStatus";
import { useQuery } from "@apollo/client";
import { getCarousel } from "graphqlResolvers";
import { ICarouselQuery, ICarouselContext } from "interfaces";
import { CarouselContext } from "./store";
import StoreHOC from "./StoreHOC";
import { useWindowSize } from "helpers/hooks/useWindowSize";

import "./index.scss";

export interface IProps {}
export const Index: React.FC<IProps> = () => {
  const { data, loading, error } = useQuery<ICarouselQuery>(getCarousel);
  const {
    state: { activeItem, selectedList },
    dispatch,
  } = useContext<ICarouselContext>(CarouselContext);
  const { width } = useWindowSize();
  useEffect(() => {
    dispatch.setLoading(loading);
    if (error) dispatch.setError(error.message);
    if (!error) dispatch.setError("");
    if (data?.getCarousel) {
      dispatch.setData(data.getCarousel);
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
    }
  }, [data, loading, error]);

  return (
    <>
      {loading || error ? (
        <CompStatus loading={loading} error={error?.message} />
      ) : (
        <Block
          col
          className={
            activeItem?.isDark && width && width > 800
              ? "carouselContainer carouselDarkBackdrop"
              : "carouselContainer"
          }
        >
          <img
            className="backdropImg"
            src={activeItem?.backImg}
            alt="backdrop"
          />
          <Header />
          {width && width > 800 ? (
            <Block col>
              <ContentDesktop />
              <Slick />
            </Block>
          ) : (
            <ContentMobile selectedList={selectedList} />
          )}
        </Block>
      )}
    </>
  );
};

export default StoreHOC(Index);
