import { AxiosResponse } from "axios";
import $api from "../http";

import { IPost } from "../models/post/IPost";

export default class PostService {
  static async getPosts(): Promise<AxiosResponse<IPost[]>> {
    return $api.get<IPost[]>("/posts");
  }

  static async getPostsByUserId(id: string): Promise<AxiosResponse<IPost[]>> {
    return $api.get<IPost[]>(`/posts/${id}`);
  }

  static async createPost({
    name,
    description,
    message,
    photoUrl,
    postedBy,
    timestamp,
  }: Partial<IPost>): Promise<AxiosResponse<Partial<IPost>>> {
    return $api.post<Partial<IPost>>("/create", {
      name,
      description,
      message,
      photoUrl,
      postedBy,
      timestamp,
    });
  }
}
