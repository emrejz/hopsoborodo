import React, { useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import { activeUser } from "graphql/user";
import { SessionContext } from "stores/session";

const index = (Component: React.FC<any>) => (props: any) => {
  const { data, loading, error, client } = useQuery(activeUser);
  const { dispatch } = useContext(SessionContext);
  useEffect(() => {
    dispatch.setLoading(loading);
    if (data) dispatch.setSession(data.activeUser);
    if (error) dispatch.setError(error.message);
    if (client) dispatch.setRefetch(client.reFetchObservableQueries);
  }, [data, loading, error, client]);
  return (
    <>
      <Component {...props} />
    </>
  );
};

export default index;
