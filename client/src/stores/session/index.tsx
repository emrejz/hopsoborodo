import React, { createContext, ReactNode, useReducer } from "react";
import { ISessionState, ISessionContext } from "interfaces";
import { reducer } from "./reducer";
import { actions } from "./actions";

export const initialState: ISessionState = {
  session: {
    username: "",
  },
  refetch: null,
  loading: false,
  error: "",
};

export const SessionContext = createContext({} as ISessionContext);
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
