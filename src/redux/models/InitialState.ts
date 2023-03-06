import { AuthResponse } from "../../models/response/AuthResponse";

interface InitialStateProps {
  isLoggedIn: boolean;
}

export type State = Partial<AuthResponse> & InitialStateProps;
