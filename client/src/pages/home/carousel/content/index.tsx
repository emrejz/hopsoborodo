import React from "react";
import { useHistory } from "react-router-dom";
import Block from "styledComps/block";
import Text from "styledComps/text";
import { ICarouselListElement } from "interfaces";

import "./index.scss";

interface IProps {
  data: ICarouselListElement;
}
const Index: React.FC<IProps> = ({
  data: { title, desc, img, buttonText, mobileBC, path },
}) => {
  const history = useHistory();
  const _onClick = () => history.push(path);
  return (
    <Block className="carouselContentContainer">
      <Block col className="info">
        <Text className="title">{title}</Text>
        <Text className="desc">{desc}</Text>
        <Block
          as="button"
          onClick={_onClick}
          style={{ backgroundColor: mobileBC }}
        >
          <Text>{buttonText}</Text>
        </Block>
      </Block>
      <Block>
        <img src={img} alt={title} onClick={_onClick} />
      </Block>
    </Block>
  );
};

export default Index;
