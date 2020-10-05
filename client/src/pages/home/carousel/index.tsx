import React, { useContext } from "react";
import { Block } from "styledComps";
import Header from "./header";
import ContentDesktop from "./contentDesktop";
import ContentMobile from "./contentMobile";
import Slick from "./slick";
import { CarouselContext } from "stores/carousel";
import CarouselHOC from "components/HOC/carousel";
import { useWindowSize } from "helpers/hooks/useWindowSize";

import "./index.scss";

export interface IProps {}
export const Index: React.FC<IProps> = () => {
  const {
    state: { activeItem, selectedList },
  } = useContext(CarouselContext);
  const { width } = useWindowSize();

  return (
    <Block
      col
      className={
        activeItem?.isDark && width && width > 800
          ? "carouselContainer carouselDarkBackdrop"
          : "carouselContainer"
      }
    >
      <img className="backdropImg" src={activeItem?.backImg} alt="backdrop" />
      <Header />
      {selectedList &&
        (width && width > 800 ? (
          <Block col>
            <ContentDesktop />
            <Slick />
          </Block>
        ) : (
          <ContentMobile selectedList={selectedList} />
        ))}
    </Block>
  );
};

export default CarouselHOC(Index)({ isItemActive: true });
