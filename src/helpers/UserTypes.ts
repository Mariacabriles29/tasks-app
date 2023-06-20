// userTypes.ts

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
}

export enum UserActionTypes {
  FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",
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

export type UserAction =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
