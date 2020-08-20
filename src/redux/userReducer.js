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
  payload: asset,
});

// Initial state
const initialState = {
  isLoggedIn: true,
  id: null,
  token: null,
  asset: [
    {
      stock: "005930",
      name: "삼성전자",
      total_quantity: 99,
      avg_price: "56800.0",
      price: "55,400",
    },
    {
      stock: "066570",
      name: "LG전자",
      total_quantity: 20,
      avg_price: "74000.0",
      price: "84,900",
    },
    {
      stock: "316140",
      name: "우리금융지주",
      total_quantity: 200,
      avg_price: "8300.0",
      price: "8,450",
    },
  ],
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
        asset: null,
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
