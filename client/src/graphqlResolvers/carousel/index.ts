import { gql } from "@apollo/client";

export const getCarousel = gql`
  query {
    getCarousel {
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
        path
      }
    }
  }
`;
