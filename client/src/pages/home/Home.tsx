import React from "react";
import Block from "styledComps/block";
import HeaderLoading from "components/headerLoading/headerLoading";

import "./home.scss";

function Home() {
  return (
    <Block className="homeContainer">
      <HeaderLoading loading={true} />
    </Block>
  );
}

export default Home;
