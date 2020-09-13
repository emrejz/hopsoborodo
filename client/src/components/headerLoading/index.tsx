import React from "react";
import Block from "styledComps/block";
import SpinnerBall from "./spinnerBall";

import "./index.scss";
interface IProps {
  loading: boolean;
}
const HeaderLoading: React.FC<IProps> = ({ loading }) => {
  return (
    <Block
      hei={loading ? "90px" : "48px"}
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
