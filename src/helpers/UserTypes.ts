export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  currentUser: string | null;
}

export enum UserActionTypes {
  FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",
  CHECK_LOGIN = "CHECK_LOGIN",
}

interface FetchUsersRequestAction {
  type: UserActionTypes.FETCH_USERS_REQUEST;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersFailureAction {
  type: UserActionTypes.FETCH_USERS_FAILURE;
  payload: string;
}
interface CHECK_LOGIN {
  type: UserActionTypes.CHECK_LOGIN;
  payload: any;
}

export type UserAction =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction
  | CHECK_LOGIN;
