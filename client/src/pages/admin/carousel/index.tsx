import React, { useState } from "react";
import { Block, Text } from "styledComps";
import ContentDesktopItem from "components/carousel/contentDesktopItem";
import { ICarouselListElement } from "interfaces";

import "./index.scss";
const initActiveItem = {
  isItemActive: true,
  mainTitle: "Test",
  title: "Test title",
  desc: "test desc",
  buttonText: "Fırsatları kaçırma",
  img:
    "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2127_20200807174021.png/format:webp",
  backImg:
    "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2093_20200807173252.png/format:webp",
  iconImg:
    "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2127_20200807174021.png/format:webp",
  mobileBC: "#2875a7",
  isDark: true,
  path: "/okula-donus",
};
interface IProps {}

const Home: React.FC<IProps> = () => {
  const [activeItem, setActiveItem] = useState<ICarouselListElement>(
    initActiveItem
  );
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "isDark" || name === "isItemActive") {
      return setActiveItem({
        ...activeItem,
        [name]: !activeItem[name],
      });
    }
    setActiveItem({
      ...activeItem,
      [name]: value,
    });
  };
  const _onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const as = Object.entries(activeItem);
  return (
    <Block col className="adminCarouselContainer">
      <Block as="form" onSubmit={_onSubmit}>
        {as.map(([name, value], index) => (
          <Block key={index}>
            <label>{name}:</label>
            {typeof value === "boolean" ? (
              <input
                name={name}
                type="checkbox"
                checked={value}
                onChange={_onChange}
              />
            ) : (
              <input
                name={name}
                type="text"
                value={value}
                onChange={_onChange}
              />
            )}
          </Block>
        ))}
        <Text as="button">Add</Text>
      </Block>
      <ContentDesktopItem activeItem={activeItem} />
    </Block>
  );
};

export default Home;
