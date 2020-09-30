import {
  ICarouselState,
  TCarouselAction,
  ECarouselActionTypes,
  ICarouselLoadingAction,
  ICarouselSuccessAction,
  ICarouselErrorAction,
  ICarouselTabListAction,
  ICarouselActiveTabAction,
  ICarouselActiveItemAction,
} from "interfaces";

export const reducer = (
  state: ICarouselState,
  action: TCarouselAction
): ICarouselState => {
  switch (action.type) {
    case ECarouselActionTypes.loading:
      return {
        ...state,
        loading: (action as ICarouselLoadingAction).payload.loading,
      };
    case ECarouselActionTypes.success:
      return {
        ...state,
        data: (action as ICarouselSuccessAction).payload.data,
      };
    case ECarouselActionTypes.error:
      return {
        ...state,
        error: (action as ICarouselErrorAction).payload.error,
      };
    case ECarouselActionTypes.tabList:
      return {
        ...state,
        tabList: (action as ICarouselTabListAction).payload.tabList,
      };
    case ECarouselActionTypes.activeTab:
      return {
        ...state,
        activeTab: (action as ICarouselActiveTabAction).payload.activeTab,
      };
    case ECarouselActionTypes.activeItem:
      return {
        ...state,
        activeItem: (action as ICarouselActiveItemAction).payload.activeItem,
      };
    default:
      console.log("Unknown 'session' action");
      return state;
  }
};
