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
  data: { title, desc, img, mobileBC, path },
}) => {
  const history = useHistory();
  const _onClick = () => history.push(path);
  return (
    <Block className="carouselContentMobileItemContainer" onClick={_onClick}>
      <img src={img} alt={title} onClick={_onClick} />
      <Block col style={{ backgroundColor: mobileBC }} className="info">
        <Text className="title">{title}</Text>
        <Text className="desc">{desc}</Text>
      </Block>
    </Block>
  );
};

export default Index;
