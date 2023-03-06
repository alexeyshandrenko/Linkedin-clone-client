import { AUTH_SUCCESS } from "../actionTypes/types";

import { Action } from "../models/Action";
import { AuthResponse } from "../../models/response/AuthResponse";

export const authSuccess = (payload: AuthResponse): Action => {
  return {
    type: AUTH_SUCCESS,
    payload,
  };
};
