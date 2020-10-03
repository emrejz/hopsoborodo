import React, { useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { activeUser } from "graphqlResolvers";
import { SessionContext } from "stores/session";
import CompStatus from "components/compStatus";
import { ISessionQuery } from "interfaces";
import { IProps } from "router";

interface IPropsHOC {}
const index = (Component: React.FC<IProps>) => (props: IPropsHOC) => {
  const { data, loading, error, client } = useQuery<ISessionQuery>(activeUser);
  const { dispatch } = useContext(SessionContext);
  useEffect(() => {
    dispatch.setLoading(loading);
    if (data)
      dispatch.setSession(data.activeUser, client.reFetchObservableQueries);
    if (error) dispatch.setError(error.message);
  }, [data, loading, error, client]);
  return (
    <>
      <CompStatus loading={loading} error={error?.message} />
      <Component {...props} />
    </>
  );
};

export default index;
