import { ApolloQueryResult } from "@apollo/client";

export interface ISession {
  username: string;
}
export interface ISessionQuery {
  activeUser: ISession;
}
export interface ISessionState {
  session: ISession;
  loading: boolean;
  error: string;
  refetch: TSessionRefetch;
}
export interface ISessionLoadingAction {
  type: ESessionActionTypes.loading;
  payload: {
    loading: boolean;
  };
}
export interface ISessionSuccessAction {
  type: ESessionActionTypes.success;
  payload: {
    session: ISession;
    refetch: TSessionRefetch;
  };
}
export interface ISessionErrorAction {
  type: ESessionActionTypes.error;
  payload: {
    error: string;
  };
}

export type TSessionAction =
  | ISessionLoadingAction
  | ISessionSuccessAction
  | ISessionErrorAction;

export type TSessionRefetch =
  | ((
      includeStandby?: boolean | undefined
    ) => Promise<ApolloQueryResult<any>[]>)
  | null;

export interface ISessionDispatch {
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
  setSession: (session: ISession, refetch: TSessionRefetch) => void;
}
export interface ISessionContext {
  state: ISessionState;
  dispatch: ISessionDispatch;
}
export enum ESessionActionTypes {
  loading = "loading",
  success = "success",
  error = "error",
}
