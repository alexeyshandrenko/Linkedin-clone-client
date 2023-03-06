import $api from "../http";
import { AxiosResponse } from "axios";

import { AuthResponse } from "../models/response/AuthResponse";
import { FormProps } from "../types/types";

export default class AuthService {
  static async login({
    email,
    password,
  }: Partial<FormProps>): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", {
      email,
      password,
    });
  }

  static async registration({
    username,
    profilePicture,
    email,
    password,
  }: FormProps): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", {
      username,
      profilePicture,
      email,
      password,
    });
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}
