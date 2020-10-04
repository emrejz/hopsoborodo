import {
  ICarouselState,
  TCarouselAction,
  ECarouselActionTypes,
} from "interfaces";

export const reducer = (
  state: ICarouselState,
  action: TCarouselAction
): ICarouselState => {
  switch (action.type) {
    case ECarouselActionTypes.loading:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case ECarouselActionTypes.success:
      return {
        ...state,
        data: action.payload.data,
      };
    case ECarouselActionTypes.error:
      return {
        ...state,
        error: action.payload.error,
      };
    case ECarouselActionTypes.tabList:
      return {
        ...state,
        tabList: action.payload.tabList,
      };
    case ECarouselActionTypes.activeTab:
      return {
        ...state,
        activeTab: action.payload.activeTab,
        selectedList:
          state.data[state.tabList.indexOf(action.payload.activeTab)]?.list,
      };
    case ECarouselActionTypes.activeItem:
      return {
        ...state,
        activeItem: action.payload.activeItem,
      };
    default:
      console.log("Unknown 'session' action");
      return state;
  }
};
