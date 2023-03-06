import $api from "../http";
import { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<Partial<IUser[]>>> {
    return $api.get<Partial<IUser[]>>("/users");
  }

  static async getUserById(id: string): Promise<AxiosResponse<IUser>> {
    return $api.get<IUser>(`/user/${id}`);
  }
}
