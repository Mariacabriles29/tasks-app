// userActions.ts

import { ThunkDispatch } from "redux-thunk";
import { Dispatch } from "redux";
import { User, UserAction, UserActionTypes } from "../../helpers/UserTypes";

export const fetchUsers = () => {
  return async (dispatch: ThunkDispatch<{}, void, UserAction>) => {
    dispatch({ type: UserActionTypes.FETCH_USERS_REQUEST });

    try {
      // Simulación de una llamada a una API con datos de usuarios
      const response = await fetch("https://api.example.com/users");
      const users: User[] = await response.json();

      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: users,
      });
    } catch (error: any) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_FAILURE,
        payload: error.message,
      });
    }
  };
};
