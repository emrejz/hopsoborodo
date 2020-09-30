import React, { createContext, ReactNode, useReducer } from "react";
import { ICarouselState, ICarouselContext } from "interfaces";
import { reducer } from "./reducer";
import { actions } from "./actions";

export const initialState: ICarouselState = {
  data: null,
  activeTab: "",
  tabList: [],
  activeItem: null,
  loading: false,
  error: "",
};

export const CarouselContext = createContext({} as ICarouselContext);
interface IProps {
  children: ReactNode;
}
export const CarouselProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, initialState);

  return (
    <CarouselContext.Provider value={{ state, dispatch: actions(dispatch) }}>
      {children}
    </CarouselContext.Provider>
  );
};
