import React from "react";
import { Link } from "react-router-dom";
import { Block, Text } from "styledComps";
import { ICarouselListElement } from "interfaces";

import "./index.scss";

interface IProps {
  activeItem: ICarouselListElement;
}
const Index: React.FC<IProps> = ({
  activeItem: { title, desc, path, mobileBC, buttonText, img },
}) => {
  return (
    <Block className="carouselContentContainer">
      <Block col className="info">
        <Text className="title">{title}</Text>
        <Text className="desc">{desc}</Text>
        <Block
          as={Link}
          to={path}
          style={{
            backgroundColor: mobileBC,
          }}
        >
          <Text>{buttonText}</Text>
        </Block>
      </Block>
      <Block as={Link} to={path}>
        <img src={img} alt={title} />
      </Block>
    </Block>
  );
};

export default Index;
