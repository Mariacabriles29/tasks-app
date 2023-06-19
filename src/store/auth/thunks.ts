import { checkingCredentials, createUser } from "../auth/authSlice";
import { Dispatch } from "redux";
export const checkingAuthetication = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };
};
export const creatingUserWithEmailPassword = (
  email: string,
  password: string,
  name: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());

    try {
      const user: any = {
        email: email,
        password: password,
        name: name,
      };
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(createUser(user));
    } catch (error) {
      //  dispatch(userCreationFailed(error.errorMessage));
    }
  };
};
