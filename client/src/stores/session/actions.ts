import React from "react";
import {
  ESessionActionTypes,
  TSessionAction,
  ISessionDispatch,
  TSessionRefetch,
  ISession,
} from "interfaces";

export const actions = (
  dispatch: React.Dispatch<TSessionAction>
): ISessionDispatch => {
  function setLoading(loading: boolean) {
    dispatch({
      type: ESessionActionTypes.loading,
      payload: { loading },
    });
  }

  function setSession(session: ISession, refetch: TSessionRefetch) {
    dispatch({
      type: ESessionActionTypes.success,
      payload: { session, refetch },
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
    setSession,
    setError,
  };
};
