import {
  UserState,
  UserAction,
  UserActionTypes,
} from "../../helpers/UserTypes";

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  currentUser: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      const newState = {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
      localStorage.setItem("users", JSON.stringify(newState));
      return {
        ...newState,
      };
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.CHECK_LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
