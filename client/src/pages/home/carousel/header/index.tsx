import React from "react";
import Block from "styledComps/block";
import HeaderItem from "./headerItem";

interface IProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  headerList: Array<string>;
}
const Index: React.FC<IProps> = ({ headerList, activeTab, setActiveTab }) => {
  console.log("activeTab", activeTab);
  return (
    <Block flex="1" jc="center" pt="18px" pb="13px">
      {headerList.map((item, index) => (
        <HeaderItem
          key={index}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          mainTitle={item}
        />
      ))}
    </Block>
  );
};

export default Index;
