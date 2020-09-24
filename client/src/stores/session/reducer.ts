import {
  ISessionState,
  TSessionAction,
  ESessionActionTypes,
  ISessionSignAction,
  ISessionSuccessAction,
  ISessionErrorAction,
  ISessionLoadingAction,
} from "interfaces/index";

export const reducer = (
  state: ISessionState,
  action: TSessionAction
): ISessionState => {
  const { type, payload } = action;
  switch (type) {
    case ESessionActionTypes.sign:
      return {
        ...state,
        refetch: (action as ISessionSignAction).payload.refetch,
      };
    case ESessionActionTypes.loading:
      return {
        ...state,
        loading: (action as ISessionLoadingAction).payload.loading,
        error: "",
      };
    case ESessionActionTypes.success:
      return {
        ...state,
        session: (action as ISessionSuccessAction).payload.session,
      };
    case ESessionActionTypes.error:
      return {
        ...state,
        error: (action as ISessionErrorAction).payload.error,
      };
    default:
      console.log("Unknown 'session' action");
      return state;
  }
};
