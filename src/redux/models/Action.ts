// import { InitialStateProps } from "../models/InitialState";
import { AuthResponse } from "../../models/response/AuthResponse";

interface IAuthSuccessAction {
  type: string;
  payload: AuthResponse;
}

export type Action = IAuthSuccessAction;
