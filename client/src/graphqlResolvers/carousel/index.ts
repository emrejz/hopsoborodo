import { gql } from "@apollo/client";

export const getCarousel = gql`
  query($isItemActive: Boolean!) {
    getCarousel(isItemActive: $isItemActive) {
      mainTitle
      list {
        isItemActive
        mainTitle
        title
        desc
        buttonText
        img
        backImg
        iconImg
        mobileBC
        isDark
        path
      }
    }
  }
`;
