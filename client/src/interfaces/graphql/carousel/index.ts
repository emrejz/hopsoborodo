export interface ICarouselListElement {
  isItemActive: boolean;
  mainTitle: string;
  title: string;
  desc: string;
  buttonText: string;
  img: string;
  backImg: string;
  iconImg: string;
  mobileBC: string;
  isDark: boolean;
  path: string;
}
export interface ICarousel {
  mainTitle: string;
  list: Array<ICarouselListElement>;
}
export interface ICarouselQuery {
  getCarousel: Array<ICarousel>;
}
export interface ICarouselState {
  data: Array<ICarousel> | null;
  loading: boolean;
  error: string;
  activeTab: string;
  tabList: Array<string>;
  activeItem: ICarouselListElement | null;
}
export interface ICarouselLoadingAction {
  type: ECarouselActionTypes.loading;
  payload: {
    loading: boolean;
  };
}
export interface ICarouselSuccessAction {
  type: ECarouselActionTypes.success;
  payload: {
    data: Array<ICarousel>;
  };
}
export interface ICarouselErrorAction {
  type: ECarouselActionTypes.error;
  payload: {
    error: string;
  };
}
export interface ICarouselTabListAction {
  type: ECarouselActionTypes.tabList;
  payload: {
    tabList: Array<string>;
  };
}
export interface ICarouselActiveTabAction {
  type: ECarouselActionTypes.activeTab;
  payload: {
    activeTab: string;
  };
}
export interface ICarouselActiveItemAction {
  type: ECarouselActionTypes.activeItem;
  payload: {
    activeItem: ICarouselListElement;
  };
}
export type TCarouselAction =
  | ICarouselLoadingAction
  | ICarouselSuccessAction
  | ICarouselErrorAction
  | ICarouselTabListAction
  | ICarouselActiveTabAction
  | ICarouselActiveItemAction;

export enum ECarouselActionTypes {
  loading = "loading",
  success = "success",
  error = "error",
  tabList = "tabList",
  activeTab = "activeTab",
  activeItem = "activeItem",
}
export interface ICarouselDispatch {
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setData: (data: Array<ICarousel>) => void;
  setTabList: (list: Array<string>) => void;
  setActiveTab: (activeTab: string) => void;
  setActiveItem: (activeItem: ICarouselListElement) => void;
}
export interface ICarouselContext {
  state: ICarouselState;
  dispatch: ICarouselDispatch;
}
