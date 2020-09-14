import React from "react";
import Block from "styledComps/block";
import Text from "styledComps/text";
import smilingPlane from "assets/images/smiling-plane.png";
import HepsiJet from "components/icons/HepsiJet";
import { Link } from "react-router-dom";

import "./index.scss";

const DeliveryMenu: React.FC = () => {
  return (
    <Block className="menuContainer">
      <Block col className="content">
        <Text
          size="--deliveryTitle"
          mt="15px"
          wei="--w700"
          clr="--deliveryMenuTittle"
          font="--helveticaBold"
        >
          Bugün Teslimatlı Ürünler
        </Text>
        <Text
          size="--deliveryDesc"
          mt="16px"
          wei="--w400"
          clr="--deliveryMenuDesc"
        >
          Her gün 14.00’e kadar vereceğiniz siparişler
        </Text>
        <Text size="--deliveryDesc" clr="--deliveryMenuDesc">
          <Text clr="--deliveryMenuTittle" wei="--w700">
            HepsiJet{" "}
          </Text>
          ile aynı gün kapınıza gelsin.
        </Text>
        <img src={smilingPlane} alt="smilingPlane" />

        <Block col pl="136px" pt="57px">
          <HepsiJet width="95px" height="21px" />
          <Text size="--deliveryFooter" wei="--w400" clr="--deliveryMenuDesc">
            ayrıcalığı ile kapınızda!
          </Text>
        </Block>
        <Block
          as="button"
          bc="--orange"
          jc="center"
          ai="center"
          hei="48px"
          mt="30px"
        >
          <Link to="/ayni-gun-kargo-teslimat">
            <Text
              clr="--primary"
              font="--helveticaBold"
              wei="--w700"
              size="--deliveryTitle"
            >
              Detaylar
            </Text>
          </Link>
        </Block>
      </Block>
    </Block>
  );
};

export default DeliveryMenu;
