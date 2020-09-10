import React from "react";
import Block from "styledComps/block";
import HeaderLoading from "./headerLoading";
import HeaderContent from "./headerContent";

import "./index.scss";

function Home() {
  return (
    <Block col className="homeContainer">
      <HeaderLoading loading={true} />
      <HeaderContent />
    </Block>
  );
}

export default Home;
