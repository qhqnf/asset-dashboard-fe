// Action type
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SETASSET = "SETASSET";

export const userLogin = (id, token) => ({
  type: LOGIN,
  payload: {
    id,
    token,
  },
});

export const logout = () => ({ type: LOGOUT });

export const setAsset = (asset) => ({
  type: SETASSET,
  payload: { ...asset },
});

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
    case SETASSET:
      return {
        ...state,
        asset: action.payload,
      };
    default:
      return state;
  }
};
