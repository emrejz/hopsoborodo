import React, { ReactElement } from "react";
import HeaderContent from "components/headerContent";
import HeaderLoading from "components/headerLoading";
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
      <main>{children}</main>
      <Footer />
    </Block>
  );
};

export default Index;
