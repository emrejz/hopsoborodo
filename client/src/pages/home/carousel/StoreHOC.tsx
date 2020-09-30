import React from "react";
import { CarouselProvider } from "./store";
import { IProps } from "./index";

interface IPropsHOC {}
const Index = (Component: React.FC<IProps>) => (props: IPropsHOC) => {
  return (
    <CarouselProvider>
      <Component {...props} />
    </CarouselProvider>
  );
};

export default Index;
