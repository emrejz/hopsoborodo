import React from "react";
import Block from "styledComps/block";
import SpinnerBall from "./spinnerBall";

import "./headerLoading.scss";
interface IProps {
  loading: boolean;
}
const HeaderLoading: React.FC<IProps> = ({ loading }) => {
  return (
    <Block
      flex="1"
      hei={loading ? "60px" : "48px"}
      jc="center"
      ai="center"
      bc="--primary"
      className="headerLoadingContainer"
    >
      {loading && <SpinnerBall animationDelay="0s" />}
      {loading && <SpinnerBall animationDelay=".2s" />}
      {loading && <SpinnerBall animationDelay=".4s" />}
    </Block>
  );
};

export default HeaderLoading;
