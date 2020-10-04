import React from "react";
import {
  ECarouselActionTypes,
  ICarousel,
  ICarouselListElement,
} from "interfaces";

export const actions = (dispatch: React.Dispatch<any>) => {
  function setLoading(loading: boolean) {
    dispatch({
      type: ECarouselActionTypes.loading,
      payload: { loading },
    });
  }

  function setError(error: string) {
    dispatch({
      type: ECarouselActionTypes.error,
      payload: { error },
    });
  }
  function setData(data: Array<ICarousel>) {
    dispatch({
      type: ECarouselActionTypes.success,
      payload: { data },
    });
  }
  function setTabList(tabList: Array<string>) {
    dispatch({
      type: ECarouselActionTypes.tabList,
      payload: { tabList },
    });
  }
  function setActiveTab(activeTab: string) {
    dispatch({
      type: ECarouselActionTypes.activeTab,
      payload: { activeTab },
    });
  }
  function setActiveItem(activeItem: ICarouselListElement) {
    dispatch({
      type: ECarouselActionTypes.activeItem,
      payload: { activeItem },
    });
  }
  return {
    setLoading,
    setData,
    setError,
    setTabList,
    setActiveTab,
    setActiveItem,
  };
};
