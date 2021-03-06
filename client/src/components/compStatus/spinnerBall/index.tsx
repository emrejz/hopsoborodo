import React from "react";
import { Block } from "styledComps";

import "./index.scss";
interface IProps {
  animationDelay: string;
}
const SpinnerBall: React.FC<IProps> = ({ animationDelay }) => {
  return (
    <Block wid="18px" hei="18px" ai="center" jc="center">
      <Block
        bc="--orange"
        className="ballContainer"
        style={{ animationDelay }}
      ></Block>
    </Block>
  );
};

export default SpinnerBall;
