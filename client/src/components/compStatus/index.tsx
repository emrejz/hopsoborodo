import React from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";
import SpinnerBall from "./spinnerBall";

import "./index.scss";
interface IProps {
  loading?: boolean;
  error?: string;
}
const CompStatus: React.FC<IProps> = ({ error, loading }) => {
  return (
    <Block
      as="nav"
      bc={error ? "--compStatusErrorBC" : "--primary"}
      className="compStatusContainer"
    >
      {loading && <SpinnerBall animationDelay="0s" />}
      {loading && <SpinnerBall animationDelay=".2s" />}
      {loading && <SpinnerBall animationDelay=".4s" />}
      {error && (
        <Text size="3rem">
          {"Something went wrong. Please refresh the page and try again. (" +
            error +
            ")"}
        </Text>
      )}
    </Block>
  );
};

export default CompStatus;
