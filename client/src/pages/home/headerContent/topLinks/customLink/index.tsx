import React from "react";
import { Link } from "react-router-dom";
import Block from "styledComps/block";
import Text from "styledComps/text";

import "./index.scss";
interface IProps {
  item: {
    title: string;
    path: string;
  };
}
const CustomLink: React.FC<IProps> = ({ item: { title, path } }) => {
  return (
    <Block mr="10px" ml="10px" shr="0" className={"customLinkContainer"}>
      <Link
        to={path}
        className={title === "Bugün Teslimat" ? " deliveryLink" : ""}
      >
        <Text
          size="--smLink"
          clr={title === "Girişimci Kadınlar" ? "--topLinkOrange" : "--topLink"}
          wei="--w700"
        >
          {title}
          <div className="deliveryLinkMenu"></div>
        </Text>
        <div className="overlay"></div>
      </Link>
    </Block>
  );
};

export default CustomLink;
