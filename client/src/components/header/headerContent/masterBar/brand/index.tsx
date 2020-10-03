import React from "react";
import { Link } from "react-router-dom";
import { Block, Text } from "styledComps";

interface IProps {}
const Brand: React.FC<IProps> = () => {
  return (
    <Block mr="10px" ml="10px" shr="0" className="brandContainer">
      <Link to="/">
        <Text size="3.4rem" clr="--orange" font="--helveticaBold" wei="--w700">
          Hopsoborodo
        </Text>
      </Link>
    </Block>
  );
};

export default Brand;
