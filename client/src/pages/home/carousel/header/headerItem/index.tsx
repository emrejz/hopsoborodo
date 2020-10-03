import React, { useContext } from "react";
import { Block, Text } from "styledComps";
import { CarouselContext } from "../../store";

import "./index.scss";

interface IProps {
  mainTitle: string;
}
const Index: React.FC<IProps> = ({ mainTitle }) => {
  const {
    state: { activeTab },
    dispatch,
  } = useContext(CarouselContext);

  return (
    <Block
      onClick={() => dispatch.setActiveTab(mainTitle)}
      className="carouselHeaderItemContainer"
    >
      <Block
        className={
          activeTab === mainTitle ? "defaultTab activeTab" : "defaultTab "
        }
      >
        <Text>{mainTitle}</Text>
      </Block>
    </Block>
  );
};

export default Index;
