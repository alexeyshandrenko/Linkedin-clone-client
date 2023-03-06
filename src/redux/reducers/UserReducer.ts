import { State } from "../models/InitialState";
import { Action } from "../models/Action";

import { AUTH_SUCCESS } from "../actionTypes/types";

const accessToken = localStorage.getItem("token") || null;
const user = localStorage.getItem("user") || null;

const initialState: State =
  accessToken && user
    ? {
        accessToken,
        user: JSON.parse(user),
        isLoggedIn: true,
      }
    : {
        accessToken: "",
        user: {},
        isLoggedIn: false,
      };

export const userReducer = (state: State = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        accessToken: payload.accessToken,
        user: payload.user,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
