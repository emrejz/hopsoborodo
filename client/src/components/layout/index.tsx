import React, { ReactElement } from "react";
import HeaderContent from "components/header/headerContent";
import ColorfulStick from "components/header/colorfulStick";
import QuickMenu from "components/header/quickMenu";
import Footer from "components/footer";
import { Block } from "styledComps";

interface IProps {
  children?: React.FC | ReactElement;
}

const Index: React.FC<IProps> = ({ children }) => {
  return (
    <Block col>
      <HeaderContent />
      <ColorfulStick />
      <QuickMenu />
      <main>{children}</main>
      <Footer />
    </Block>
  );
};

export default Index;
