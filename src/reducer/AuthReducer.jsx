import { authActionsConstants } from "./authActionsConstant";
const {
  GET_USER_DETAILS,
  USER_LOGOUT,
  USER_LOGIN_FAILURE,
  USER_SIGNUP_FAILURE,
} = authActionsConstants;

const AuthReducer = (authState, authAction) => {
  switch (authAction.type) {
    case GET_USER_DETAILS:
      return {
        ...authState,
        user: [authAction.payload],
        isAuthenticated: true,
      };
    case USER_LOGOUT:
      return { ...authState, user: [], isAuthenticated: false };
    case USER_LOGIN_FAILURE:
      return {
        ...authState,
        user: [],
        isAuthenticated: false,
        error: authAction.payload,
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...authState,
        user: [],
        isAuthenticated: false,
        error: authAction.payload,
      };
    default:
      return authState;
  }
};
export { AuthReducer };
