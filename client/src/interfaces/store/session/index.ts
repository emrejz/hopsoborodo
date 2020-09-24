import { ApolloQueryResult } from "@apollo/client";

export interface ISession {
  __typename: string;
  username: string;
}
export interface ISessionState {
  session: ISession;
  loading: boolean;
  error: string;
  refetch: (() => Promise<ApolloQueryResult<any>[]>) | null;
}
export interface ISessionLoadingAction {
  type: ESessionActionTypes;
  payload: {
    loading: boolean;
  };
}
export interface ISessionSuccessAction {
  type: ESessionActionTypes;
  payload: {
    session: ISession;
  };
}
export interface ISessionErrorAction {
  type: ESessionActionTypes;
  payload: {
    error: string;
  };
}
export interface ISessionSignAction {
  type: ESessionActionTypes;
  payload: {
    refetch: () => Promise<ApolloQueryResult<any>[]>;
  };
}
export type TSessionAction =
  | ISessionLoadingAction
  | ISessionSuccessAction
  | ISessionErrorAction
  | ISessionSignAction;

export interface ISessionContext {
  state: ISessionState;
  action: TSessionAction;
}
export enum ESessionActionTypes {
  loading = "loading",
  sign = "sign",
  success = "success",
  error = "error",
}
