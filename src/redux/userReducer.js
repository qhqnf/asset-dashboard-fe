// Action type
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

// Initial state
const initialState = {
  isLoggedIn: false,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        id: action.payload.id,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        id: null,
        token: null,
      };
    default:
      return state;
  }
};