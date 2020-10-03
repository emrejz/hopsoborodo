import React from "react";
import { Link } from "react-router-dom";
import { Block } from "styledComps";
import DeliveryMenu from "./deliveryMenu";

import "./index.scss";
interface IProps {
  item: {
    title: string;
    path: string;
  };
}
const CustomLink: React.FC<IProps> = ({ item: { title, path } }) => {
  return (
    <Block mr="10px" ml="10px" shr="0" className="customLinkContainer">
      <Block className={title === "Bugün Teslimat" ? "delivery" : ""}>
        <Link
          to={path}
          className={
            title === "Girişimci Kadınlar" ? "linkTitle linkWoman" : "linkTitle"
          }
        >
          {title}
          <div className="menu"></div>
        </Link>
        {title === "Bugün Teslimat" && <DeliveryMenu />}
        <div className="overlay"></div>
      </Block>
    </Block>
  );
};

export default CustomLink;
