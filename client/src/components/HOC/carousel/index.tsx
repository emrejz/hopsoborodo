import React, { useEffect, useContext } from "react";
import CompStatus from "components/compStatus";

import { CarouselContext } from "stores/carousel";
import { useQuery } from "@apollo/client";
import { getCarousel } from "graphqlResolvers";

import { ICarouselQuery, ICarouselContext } from "interfaces";

interface IPropsHOC {}
interface ICondition {
  isItemActive: boolean;
}
const index = (Component: React.FC) => ({ isItemActive }: ICondition) => (
  props: IPropsHOC
) => {
  const { dispatch } = useContext<ICarouselContext>(CarouselContext);

  const { data, loading, error } = useQuery<ICarouselQuery>(getCarousel, {
    variables: { isItemActive },
  });
  useEffect(() => {
    dispatch.setLoading(loading);
    if (error) dispatch.setError(error.message);
    if (!error) dispatch.setError("");
    if (data?.getCarousel) {
      dispatch.setData(data.getCarousel);
      const tempArr: Array<string> = [];
      data.getCarousel.forEach((element) => {
        const { list, mainTitle } = element;
        if (list.length > 0) {
          tempArr.push(mainTitle);
        }
      });
      dispatch.setTabList(tempArr);
      dispatch.setActiveTab(tempArr[0]);
      dispatch.setActiveItem(data.getCarousel[0].list[0]);
    }
  }, [data, loading, error]);

  return (
    <>
      {data ? (
        <Component {...props} />
      ) : (
        <CompStatus loading={loading} error={error?.message} />
      )}
    </>
  );
};

export default index;
