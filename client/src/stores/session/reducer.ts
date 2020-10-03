import {
  ISessionState,
  TSessionAction,
  ESessionActionTypes,
  ISessionSuccessAction,
  ISessionErrorAction,
  ISessionLoadingAction,
} from "interfaces/index";
//working like carousel store
export const reducer = (
  state: ISessionState,
  action: TSessionAction
): ISessionState => {
  switch (action.type) {
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
        refetch: (action as any).payload.refetch,
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
