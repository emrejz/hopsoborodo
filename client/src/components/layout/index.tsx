import React, { ReactElement } from "react";
import HeaderContent from "components/header/headerContent";
import HeaderLoading from "components/header/headerLoading";
import ColorfulStick from "components/header/colorfulStick";
import QuickMenu from "components/header/quickMenu";
import SessionStatus from "components/header/sessionStatus";
import Footer from "components/footer";
import Block from "styledComps/block";

interface IProps {
  children?: React.FC | ReactElement;
}

const Index: React.FC<IProps> = ({ children }) => {
  return (
    <Block col>
      <HeaderLoading loading={false} />
      <HeaderContent />
      <ColorfulStick />
      <QuickMenu />
      <SessionStatus />
      <main>{children}</main>
      <Footer />
    </Block>
  );
};

export default Index;
