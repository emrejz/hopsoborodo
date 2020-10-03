import React from "react";
import { Link } from "react-router-dom";
import { Block, Text } from "styledComps";
import { ICarouselListElement } from "interfaces";

import "./index.scss";

interface IProps {
  data: ICarouselListElement;
}
const Index: React.FC<IProps> = ({
  data: { title, desc, img, mobileBC, path },
}) => {
  return (
    <Block as={Link} to={path} className="carouselContentMobileItemContainer">
      <img src={img} alt={title} />
      <Block col style={{ backgroundColor: mobileBC }} className="info">
        <Text className="title">{title}</Text>
        <Text className="desc">{desc}</Text>
      </Block>
    </Block>
  );
};

export default Index;
