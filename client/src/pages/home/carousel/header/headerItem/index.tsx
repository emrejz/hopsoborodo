import React from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";

import "./index.scss";

interface IProps {
  mainTitle: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const index: React.FC<IProps> = ({ mainTitle, activeTab, setActiveTab }) => {
  console.log(mainTitle);
  console.log(activeTab);
  console.log(activeTab === mainTitle);
  return (
    <Block
      onClick={() => setActiveTab(mainTitle)}
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

export default index;
