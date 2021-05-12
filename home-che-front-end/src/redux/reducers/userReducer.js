import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../types/user-types";
const initialState = {
  isLoading: false,
  user: {},
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USER_SUCCESS:
      return {
        isLoading: false,
        user: action.payload,
        error: "",
      };

    case GET_USER_FAILED:
      return {
        isLoading: false,
        user: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
