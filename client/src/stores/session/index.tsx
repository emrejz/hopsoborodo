import React, { createContext, ReactNode, useReducer } from "react";
import { ISessionState, ISession } from "interfaces";
import { reducer } from "./reducer";
import { actions } from "./actions";
import { ApolloQueryResult } from "@apollo/client";

export const initialState: ISessionState = {
  session: {
    __typename: "",
    username: "",
  },
  refetch: null,
  loading: false,
  error: "",
};
interface IDispatch {
  setLoading: (loading: boolean) => void;
  setRefetch: (refetch: () => Promise<ApolloQueryResult<any>[]>) => void;
  setError: (error: string) => void;
  setSession: (session: ISession) => void;
}
interface asa {
  state: ISessionState;
  dispatch: IDispatch;
}
export const SessionContext = createContext({} as asa);
interface IProps {
  children: ReactNode;
}
export const SessionProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, initialState);

  return (
    <SessionContext.Provider value={{ state, dispatch: actions(dispatch) }}>
      {children}
    </SessionContext.Provider>
  );
};
