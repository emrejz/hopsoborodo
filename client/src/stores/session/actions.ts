import React from "react";
import { ESessionActionTypes, TSessionAction, ISession } from "interfaces";
import { ApolloQueryResult } from "@apollo/client";

export const actions = (dispatch: React.Dispatch<TSessionAction>) => {
  function setLoading(loading: boolean) {
    dispatch({
      type: ESessionActionTypes.loading,
      payload: { loading },
    });
  }
  function setRefetch(refetch: () => Promise<ApolloQueryResult<any>[]>) {
    dispatch({
      type: ESessionActionTypes.sign,
      payload: { refetch },
    });
  }
  function setSession(session: ISession) {
    dispatch({
      type: ESessionActionTypes.success,
      payload: { session },
    });
  }
  function setError(error: string) {
    dispatch({
      type: ESessionActionTypes.error,
      payload: { error },
    });
  }
  return {
    setLoading,
    setRefetch,
    setSession,
    setError,
  };
};
